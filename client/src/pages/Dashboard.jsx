import { useState, useEffect } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom";
import ProgressSummary from "./ProgressSummary";

export default function Dashboard() {
  const [topics, setTopics] = useState([]);
  const [openTopic, setOpenTopic] = useState(null);
  const [completedItems, setCompletedItems] = useState([]);

  useEffect(() => {
    api.get("/topics").then((res) => setTopics(res.data));
    api
      .get("/progress")
      .then((res) => setCompletedItems(res.data.completedItems));
  }, []);

  const toggleTopic = (topicId) => {
    setOpenTopic(openTopic === topicId ? null : topicId);
  };

  const handleCheckbox = (topicId, problemId, checked) => {
    const itemId = `${topicId}_${problemId}`;
    api.post("/progress", { itemId, completed: checked }).then(() => {
      if (checked) {
        setCompletedItems((prev) => [...prev, itemId]);
      } else {
        setCompletedItems((prev) => prev.filter((i) => i !== itemId));
      }
    });
  };

  if (!localStorage.getItem("token")) {
    window.location.href = "/login";
  }

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case "easy":
        return "text-green-600 bg-green-50 border-green-200";
      case "medium":
        return "text-orange-600 bg-orange-50 border-orange-200";
      case "hard":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  // Check if all subtopics in a topic are completed
  const isTopicCompleted = (topic) => {
    if (!topic.subtopics || topic.subtopics.length === 0) return false;

    return topic.subtopics.every((subtopic) => {
      const itemId = `${topic.topicId}_${subtopic.problemId}`;
      return completedItems.includes(itemId);
    });
  };

  // Get completion stats for a topic
  const getTopicStats = (topic) => {
    if (!topic.subtopics || topic.subtopics.length === 0) {
      return { completed: 0, total: 0 };
    }

    const completed = topic.subtopics.filter((subtopic) => {
      const itemId = `${topic.topicId}_${subtopic.problemId}`;
      return completedItems.includes(itemId);
    }).length;

    return { completed, total: topic.subtopics.length };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-2">
                <span className="text-white text-xl">💻</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                DSA Sheet Tracker
              </h1>
            </div>
            <Link
              to="/logout"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <span>🚪</span>
              <span>Logout</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProgressSummary />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">DSA Topics</h2>

          {topics.map((topic) => {
            const topicCompleted = isTopicCompleted(topic);
            const topicStats = getTopicStats(topic);

            return (
              <div
                key={topic._id}
                className={`bg-white rounded-xl shadow-sm border-2 overflow-hidden transition-all duration-200 ${
                  topicCompleted
                    ? "border-green-300 bg-green-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`p-4 cursor-pointer transition-all duration-200 flex justify-between items-center ${
                    topicCompleted
                      ? "bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200"
                      : "bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200"
                  }`}
                  onClick={() => toggleTopic(topic.topicId)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          topicCompleted ? "bg-green-500" : "bg-blue-500"
                        }`}
                      ></div>
                      {topicCompleted && (
                        <span className="text-green-600 text-lg">✓</span>
                      )}
                    </div>
                    <span
                      className={`font-semibold text-lg ${
                        topicCompleted ? "text-green-800" : "text-gray-800"
                      }`}
                    >
                      {topic.title}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                        topic.level
                      )}`}
                    >
                      {topic.level}
                    </span>
                    {topicCompleted && (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium border border-green-200">
                        Completed
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-sm ${
                        topicCompleted ? "text-green-600" : "text-gray-500"
                      }`}
                    >
                      {topicStats.completed}/{topicStats.total} problems
                    </span>
                    <span
                      className="transform transition-transform duration-200 text-gray-400"
                      style={{
                        transform:
                          openTopic === topic.topicId
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    >
                      ▼
                    </span>
                  </div>
                </div>

                {openTopic === topic.topicId && (
                  <div className="p-6 bg-white border-t border-gray-100">
                    <div className="space-y-4">
                      {topic.subtopics.map((sub) => {
                        const itemId = `${topic.topicId}_${sub.problemId}`;
                        const isChecked = completedItems.includes(itemId);
                        return (
                          <div
                            key={sub.problemId}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                              isChecked
                                ? "bg-green-50 border-green-200"
                                : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) =>
                                  handleCheckbox(
                                    topic.topicId,
                                    sub.problemId,
                                    e.target.checked
                                  )
                                }
                                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                              />
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <span
                                    className={`font-medium ${
                                      isChecked
                                        ? "text-green-800"
                                        : "text-gray-800"
                                    }`}
                                  >
                                    {sub.title}
                                  </span>
                                  <span
                                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                                      sub.level
                                    )}`}
                                  >
                                    {sub.level}
                                  </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                  <a
                                    href={sub.youtubeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                                  >
                                    <span>📺</span>
                                    <span>YouTube</span>
                                  </a>
                                  <a
                                    href={sub.leetcodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors"
                                  >
                                    <span>💻</span>
                                    <span>LeetCode</span>
                                  </a>
                                  <a
                                    href={sub.articleLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                  >
                                    <span>📚</span>
                                    <span>Article</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

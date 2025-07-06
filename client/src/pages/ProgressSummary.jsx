import { useEffect, useState } from "react";
import api from "../api/axios";
import { all } from "axios";

export default function ProgressSummary() {
  const [completedItems, setCompletedItems] = useState([]);
  const [allSubtopicsCount, setAllSubtopicsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [allTopics, setAllTopics] = useState([]);

  const fetchProgressData = async () => {
    setIsLoading(true);
    try {
      // Fetch completed progress
      const progressRes = await api.get("/progress");
      setCompletedItems(progressRes.data.completedItems);

      // Fetch all topics to count total number of problems
      const topicsRes = await api.get("/topics");
      setAllTopics(topicsRes.data);
      let count = 0;
      topicsRes.data.forEach((topic) => {
        count += topic.subtopics.length;
      });
      setAllSubtopicsCount(count);
    } catch (error) {
      console.error("Error fetching progress data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProgressData();
  }, []);

  // Calculate difficulty-based counts
  const getDifficultyStats = () => {
    const stats = {
      easy: 0,
      medium: 0,
      hard: 0,
    };

    completedItems.forEach((itemId) => {
      const [topicId, problemId] = itemId.split("_");
      const topic = allTopics.find((t) => t.topicId === topicId);
      if (topic) {
        const subtopic = topic.subtopics.find((s) => s.problemId === problemId);
        if (subtopic) {
          const level = subtopic.level?.toLowerCase();
          if (level === "easy") stats.easy++;
          else if (level === "medium") stats.medium++;
          else if (level === "hard") stats.hard++;
        }
      }
    });

    return stats;
  };

  if (allSubtopicsCount === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">Loading progress...</span>
        </div>
      </div>
    );
  }

  const completedCount = completedItems.length;
  const percentage = ((completedCount / allSubtopicsCount) * 100).toFixed(1);
  const difficultyStats = getDifficultyStats();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-full p-2 mr-3">
            <span className="text-blue-600 text-xl">📊</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Your Progress</h3>
        </div>
        <button
          onClick={fetchProgressData}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          <span className={`${isLoading ? "animate-spin" : ""}`}>
            {isLoading ? "🔄" : "🔄"}
          </span>
          <span>{isLoading ? "Refreshing..." : "Refresh"}</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700">
            <span className="font-bold text-blue-600 text-xl">
              {completedCount}
            </span>
            <span className="text-gray-500"> of </span>
            <span className="font-bold text-gray-800">{allSubtopicsCount}</span>
            <span className="text-gray-500"> problems completed</span>
          </p>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {percentage}%
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-3 text-center border border-green-200">
            <div className="text-sm text-gray-500 mb-1">Easy</div>
            <div className="text-xl font-bold text-green-600">
              {difficultyStats.easy}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-orange-200">
            <div className="text-sm text-gray-500 mb-1">Medium</div>
            <div className="text-xl font-bold text-orange-600">
              {difficultyStats.medium}
            </div>
          </div>
          <div className="bg-white rounded-lg p-3 text-center border border-red-200">
            <div className="text-sm text-gray-500 mb-1">Hard</div>
            <div className="text-xl font-bold text-red-600">
              {difficultyStats.hard}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Topic from "../models/Topic.js";

export const getAllTopics = async (req, res) => {
  const topics = await Topic.find();
  res.json(topics);
};

export const getTopicById = async (req, res) => {
  const { topicId } = req.params;
  const topic = await Topic.findOne({ topicId });
  if (!topic) return res.status(404).json({ msg: "Topic not found" });
  res.json(topic);
};

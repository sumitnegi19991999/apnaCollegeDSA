import mongoose from "mongoose";

const subtopicSchema = new mongoose.Schema({
  problemId: String,
  title: String,
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
  level: { type: String, enum: ["Easy", "Medium", "Hard"] },
  createdAt: { type: Date, default: Date.now },
});

const topicSchema = new mongoose.Schema({
  topicId: { type: String, unique: true },
  title: String,
  description: String,
  level: { type: String, enum: ["Easy", "Medium", "Hard"] },
  subtopics: [subtopicSchema],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Topic", topicSchema);

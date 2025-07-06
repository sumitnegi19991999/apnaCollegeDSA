import mongoose from "mongoose";
import dotenv from "dotenv";
import Topic from "./models/Topic.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// Sample Topics Data
const topicsData = [
  {
    topicId: "arrays",
    title: "Arrays",
    description: "Learn about arrays and basic problems.",
    level: "Easy",
    subtopics: [
      {
        problemId: "problem1",
        title: "Two Sum",
        youtubeLink: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
        leetcodeLink: "https://leetcode.com/problems/two-sum/",
        articleLink: "https://www.geeksforgeeks.org/two-sum-problem/",
        level: "Easy",
      },
      {
        problemId: "problem2",
        title: "Best Time to Buy and Sell Stock",
        youtubeLink: "https://www.youtube.com/watch?v=1pkOgXD63yU",
        leetcodeLink:
          "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
        articleLink: "https://www.geeksforgeeks.org/stock-buy-sell/",
        level: "Medium",
      },
    ],
  },
  {
    topicId: "strings",
    title: "Strings",
    description: "String manipulation and algorithms.",
    level: "Medium",
    subtopics: [
      {
        problemId: "problem1",
        title: "Valid Anagram",
        youtubeLink: "https://www.youtube.com/watch?v=9UtInBqnCgA",
        leetcodeLink: "https://leetcode.com/problems/valid-anagram/",
        articleLink:
          "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/",
        level: "Easy",
      },
      {
        problemId: "problem2",
        title: "Longest Substring Without Repeating Characters",
        youtubeLink: "https://www.youtube.com/watch?v=wiGpQwVHdE0",
        leetcodeLink:
          "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        articleLink:
          "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/",
        level: "Medium",
      },
    ],
  },
  {
    topicId: "linkedlists",
    title: "Linked Lists",
    description: "Linked list basics and advanced problems.",
    level: "Medium",
    subtopics: [
      {
        problemId: "problem1",
        title: "Reverse Linked List",
        youtubeLink: "https://www.youtube.com/watch?v=O0By4Zq0OFc",
        leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/",
        articleLink: "https://www.geeksforgeeks.org/reverse-a-linked-list/",
        level: "Easy",
      },
      {
        problemId: "problem2",
        title: "Detect Cycle in a Linked List",
        youtubeLink: "https://www.youtube.com/watch?v=ZJBG6kvYJpI",
        leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/",
        articleLink:
          "https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/",
        level: "Medium",
      },
    ],
  },
  {
    topicId: "arraysHard",
    title: "Arrays",
    description: "Learn about arrays and advanced problems.",
    level: "Hard",
    subtopics: [
      {
        problemId: "problem1",
        title: "Trapping Rain Water",
        youtubeLink: "https://www.youtube.com/watch?v=UZG3-vZlFM4",
        leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/",
        articleLink: "https://www.geeksforgeeks.org/trapping-rain-water/",
        level: "Hard",
      },
      {
        problemId: "problem2",
        title: "First Missing Positive",
        youtubeLink: "https://www.youtube.com/watch?v=8g78yfzMlao",
        leetcodeLink: "https://leetcode.com/problems/first-missing-positive/",
        articleLink:
          "https://www.geeksforgeeks.org/find-the-smallest-positive-number-missing-from-an-unsorted-array/",
        level: "Hard",
      },
    ],
  },
  {
    topicId: "stringsHard",
    title: "Strings",
    description: "String manipulation and advanced algorithms.",
    level: "Hard",
    subtopics: [
      {
        problemId: "problem1",
        title: "Palindrome Partitioning II",
        youtubeLink: "https://www.youtube.com/watch?v=wbMh8kP2zDU",
        leetcodeLink:
          "https://leetcode.com/problems/palindrome-partitioning-ii/",
        articleLink:
          "https://www.geeksforgeeks.org/minimum-number-cuts-palindrome-partitioning/",
        level: "Hard",
      },
      {
        problemId: "problem2",
        title: "Wildcard Matching",
        youtubeLink: "https://www.youtube.com/watch?v=ZmlQ3vgAOMo",
        leetcodeLink: "https://leetcode.com/problems/wildcard-matching/",
        articleLink: "https://www.geeksforgeeks.org/wildcard-pattern-matching/",
        level: "Hard",
      },
    ],
  },
  {
    topicId: "linkedlistsHard",
    title: "Linked Lists",
    description: "Linked list hard problems and techniques.",
    level: "Hard",
    subtopics: [
      {
        problemId: "problem1",
        title: "Merge k Sorted Lists",
        youtubeLink: "https://www.youtube.com/watch?v=ptYUCjfNhJY",
        leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
        articleLink:
          "https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/",
        level: "Hard",
      },
      {
        problemId: "problem2",
        title: "Reverse Nodes in k-Group",
        youtubeLink: "https://www.youtube.com/watch?v=Of0HPkk3JgI",
        leetcodeLink: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
        articleLink:
          "https://www.geeksforgeeks.org/reverse-alternate-k-nodes-in-a-singly-linked-list/",
        level: "Hard",
      },
    ],
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected.");

    // Remove existing topics
    await Topic.deleteMany();
    console.log("Existing topics removed.");

    // Insert sample topics
    await Topic.insertMany(topicsData);
    console.log("Sample topics inserted.");

    process.exit(0); // Exit success
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1); // Exit with error
  }
}

seedDatabase();

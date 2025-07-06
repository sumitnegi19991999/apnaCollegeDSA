import User from "../models/User.js";

export const updateProgress = async (req, res) => {
  const { itemId, completed } = req.body;
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ msg: "User not found" });

  if (completed) {
    if (!user.completedItems.includes(itemId)) {
      user.completedItems.push(itemId);
    }
  } else {
    user.completedItems = user.completedItems.filter((i) => i !== itemId);
  }

  await user.save();
  res.json({ msg: "Progress updated" });
};

export const getProgress = async (req, res) => {
  const user = await User.findById(req.userId);
  if (!user) return res.status(404).json({ msg: "User not found" });

  res.json({ completedItems: user.completedItems });
};

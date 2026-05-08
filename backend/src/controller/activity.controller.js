import { activityModel } from "../model/activity.model.js";

const addActivities = async (req, res) => {
  const { action, details } = req.body;

  try {
    const lastActivity = await activityModel.findOne().sort({ id:-1 })
    const newId = (lastActivity?.id || 0) + 1

    await activityModel.create({
      id: newId,
      action,
      timestamp: [
        new Date().toLocaleDateString("en-US", { dateStyle: "short" }),
        new Date().toLocaleTimeString("en-US", { timeStyle: "medium" }),
      ],
      details
    });

    return res.status(201).json({ message: "created" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error: ", err });
  }
};

const getActivities = async (_, res) => {
  try {
    const activities = await activityModel.find().sort({ id:1 });
    return res.status(200).json({ message: "fetched", activities });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error: ",err });
  }
};

const deleteAllActivities = async (_, res) => {
  try {
    await activityModel.deleteMany({});
    return res.status(200).json({ message: "All activities deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export default { addActivities, getActivities, deleteAllActivities };

import express from "express";
const router = express.Router();

//import
import activityController from "../controller/activity.controller.js";

//routes
router.post("/add", activityController.addActivities);
router.get("/fetch", activityController.getActivities);
router.delete("/clear", activityController.deleteAllActivities);

export default router;

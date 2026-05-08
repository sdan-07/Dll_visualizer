import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    action: String,
    timestamp: [String],
    details: String
})

export const activityModel = mongoose.model("activity", activitySchema)

// Tasks Model

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema ({
    description: String,
    completed: Boolean
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
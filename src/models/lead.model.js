import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
    },
    service: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
}, {timestamps: ""});

const Lead = mongoose.model("Lead", leadSchema);
export default Lead;
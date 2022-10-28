import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    techStack: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

export const Project = mongoose.model("project", ProjectSchema)



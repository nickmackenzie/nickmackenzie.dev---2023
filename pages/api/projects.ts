import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";



const connectToDatabase = async () => {
    if (mongoose.connection.readyState === 0) {        
        await mongoose.connect(process.env.MONGODB_URI);
    }
};

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
    const ProjectSchema = new mongoose.Schema({
        id: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        subtitle: {
            type: String,
            required: true,
        },
        liveURL: {
            type: String,
            required: true,
        },
        sourceCodeURL: {
            type: String,
            required: true,
        },
        stack: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    });
    
    const Project = mongoose.model("Project", ProjectSchema);
    try {
        await connectToDatabase();
        let data = await Project.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default getProjects;

export function handler() {
    throw new Error("Function not implemented.");
}


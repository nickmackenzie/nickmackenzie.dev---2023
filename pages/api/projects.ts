import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const connectToDatabase = async (): Promise<void> => {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string);
    }
  };
// TODO: Move into its own type(s) file
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

// TODO: Move into its own type(s) file
const ErrorSchema = new mongoose.Schema({
    message: {
      type: String,
      required: true,
    },  
    url: {
        type: String,       
      },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const Error = mongoose.models.Error || mongoose.model("Error", ErrorSchema);  

const logError = async (message: string, timestamp: string, url:string | undefined) => {
try {
    const error = new Error({
    message,        
    timestamp,
    url
    });  
    await error.save();
} catch (error) {
    console.error("Failed to log error:", error);
}
};

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
try {
    console.log(req.query)
    if(req.query.find === "all") {
        await connectToDatabase();
        let data = await Project.find({}).select('url');  
        res.status(200).json(data);
    } else {
        await connectToDatabase();
        let data = await Project.findOne({ url: req.query.find })       
        console.log("ASDASDASD",data)
        res.status(200).json(data);
    }
 
} catch (error) {
    console.error(error);
    logError((error as Error).toString(), Date.now().toString(),"GetProjects API");
    res.status(500).json({ error: "Internal server error" });
}
};  

export default getProjects;








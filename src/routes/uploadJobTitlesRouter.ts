import { Router, Request, Response } from "express";
import cors from "cors";

const router = Router();

// CORS options (customize as needed)
const corsOptions = {
  origin: "*", // Replace with your allowed origin(s) or use "*" for all origins
  methods: ["POST"], // Allow only POST requests
  allowedHeaders: ["Content-Type"], // Allow only specific headers
};

// New endpoint for receiving job titles
router.post("/", cors(corsOptions), (req: Request, res: Response) => {
  const jobTitles = req.body.locations;

  if (!jobTitles) {
    return res.status(400).json({ error: "Missing job titles" });
  }

  // Check if jobTitles is an array
  if (!Array.isArray(jobTitles)) {
    return res.status(400).json({ error: "Invalid job titles format" });
  }

  console.log("Received job titles:", jobTitles);

  setTimeout(() => {
    res.json({
      message: "Job titles received successfully",
      jobTitles: jobTitles,
    });
  }, 5000);
});

export default router;

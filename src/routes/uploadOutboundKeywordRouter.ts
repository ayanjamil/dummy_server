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
  const keyword = req.body.keyword;

  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword titles" });
  }

  // Check if jobTitles is an array
  if (!Array.isArray(keyword)) {
    return res.status(400).json({ error: "Invalid keyword titles format" });
  }

  console.log("Received keywords for outbound  titles:", keyword);

  setTimeout(() => {
    res.json({
      message: " Outbound keyword titles received successfully",
      Keywords: keyword,
    });
  }, 5000);
});

export default router;

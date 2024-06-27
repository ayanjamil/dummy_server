import express, { Router, Request, Response } from "express";
import multer from "multer";
import cors from "cors";

const router = Router();

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

// CORS options (customize as needed)
const corsOptions = {
  origin: "*", // Replace with your allowed origin(s) or use "*" for all origins
  methods: ["POST"], // Allow only POST requests
  allowedHeaders: ["Content-Type"], // Allow only specific headers
};

// Middleware to parse JSON body
router.use(express.json());

// New endpoint for receiving locations
router.post(
  "/",
  cors(corsOptions),
  upload.none(), // Use Multer to handle form-data
  (req: Request, res: Response) => {
    let locations = req.body.locations;

    if (!locations) {
      return res.status(400).json({ error: "Missing locations" });
    }

    // Assuming locations is sent as a comma-separated string
    const parsedLocations = locations.split(",");

    console.log("Received locations:", parsedLocations);

    // Add a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      res.json({
        message: "Locations received successfully",
        locations: parsedLocations,
      });
    }, 5000);
  }
);
export default router;

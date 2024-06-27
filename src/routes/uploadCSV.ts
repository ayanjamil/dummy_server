import { Router, Request, Response } from "express";
import multer from "multer";
import cors from "cors";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

// CORS options (customize as needed)
const corsOptions = {
  origin: "*", // Replace with your allowed origin(s) or use "*" for all origins
  methods: ["POST"], // Allow only POST requests
  allowedHeaders: ["Content-Type"], // Allow only specific headers
};

router.post(
  "/",
  cors(corsOptions),
  upload.array("csvFiles"),
  async (req: Request, res: Response) => {
    const files = req.files as Express.Multer.File[];
    // const locations = req.body.locations;

    if (!files) {
      return res.status(400).json({ error: "Missing files" });
    }

    files.forEach((file) => {
      console.log(`Received file: ${file.originalname}`);
      // Here you can process each file as needed
    });

    setTimeout(() => {
      res.json({
        message: "Files received successfully",
      });
    }, 5000);
  }
);

export default router;

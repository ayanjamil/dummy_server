import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  // Handle the incoming data here
  const data = req.body;
  console.log(`Received data: ${JSON.stringify(data)}`);
  res.json({ message: "Data received successfully" });
});

export default router;

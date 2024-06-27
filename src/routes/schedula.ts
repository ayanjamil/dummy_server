import { Router, Request, Response } from "express";

const router = Router();

// Sample data
const emails = [
  {
    id: 2,
    subject: "Hi",
    body: "Hi, world!",
    date: "2024-01-02",
    scheduled: true,
    recipient: "rohit@workerai.co",
  },
  {
    id: 4,
    subject: "Hola",
    body: "Hola, world!",
    date: "2024-01-04",
    scheduled: true,
    recipient: "raj@workerai.co",
  },
  {
    id: 3,
    subject: "Hey",
    body: "Hey, world!",
    date: "2024-01-03",
    scheduled: false,
    recipient: "ayan@workerai.co",
  },
  {
    id: 1,
    subject: "Hello",
    body: "Hello, world!",
    date: "2024-01-01",
    scheduled: false,
    recipient: "anshuman@workerai.co",
  },
  {
    id: 5,
    subject: "Namaste",
    body: "Namaste, world!",
    date: "2024-01-05",
    scheduled: false,
    recipient: "abhiraj@workerai.co",
  },
  {
    id: 6,
    subject: "Bonjour",
    body: "Bonjour, world!",
    date: "2024-01-06",
    scheduled: false,
    recipient: "rando@workerai.co",
  },
];

router.get("/", async (req: Request, res: Response) => {
  const delay = Math.floor(Math.random() * 3000) + 1000; // random delay between 1-4 seconds
  await new Promise((resolve) => setTimeout(resolve, delay));
  res.json(emails);
});

export default router;

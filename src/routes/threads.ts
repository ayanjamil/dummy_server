import { Router, Request, Response } from "express";

const router = Router();
export interface Thread {
  threadid: string;
  thread: Email[];
}
export interface Email {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  date: string;
  read: boolean;
  labels: string[];
}

// Sample data
const threads: Thread[] = [
  {
    threadid: "iyvutf",
    thread: [
      {
        id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
        name: "William Smith",
        email: "williamsmith@example.com",
        subject: "Meeting Tomorrow",
        text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
        date: "2023-10-22T09:00:00",
        read: true,
        labels: ["meeting", "work", "important"],
      },
      {
        id: "110e8400-e29b-11d4-a716-446655440000",
        name: "Alice Smith",
        email: "alicesmith@example.com",
        subject: "Re: Project Update",
        text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
        date: "2023-10-22T10:30:00",
        read: true,
        labels: ["work", "important"],
      },
    ],
  },
  {
    threadid: "jklmnp",
    thread: [
      {
        id: "c1d9e93a-f94d-4eee-8f5e-ea952d93ee34",
        name: "Michael Johnson",
        email: "michaeljohnson@example.com",
        subject: "New Feature Request",
        text: "Hi team,\n\nI've received a feature request from one of our key clients. They would like us to implement a new feature that allows them to generate customized reports based on specific criteria.\n\nCould you please review the attached requirements document and let me know your thoughts? We'll need to discuss the feasibility, timeline, and resource allocation for this project.\n\nThanks in advance for your input.\n\nBest regards, Michael",
        date: "2023-11-10T14:20:00",
        read: false,
        labels: ["feature", "client", "important"],
      },
      {
        id: "2c3b8c1b-0909-4da1-a447-e65925efc05d",
        name: "Sarah Lee",
        email: "sarahlee@example.com",
        subject: "Re: New Feature Request",
        text: "Hi Michael,\n\nI've reviewed the requirements document, and the requested feature seems feasible. However, we'll need to allocate additional resources and extend the timeline to accommodate this new development.\n\nI've put together a preliminary plan and estimated timeline. Please review the attached document and let me know if you have any concerns or if we need to make any adjustments.\n\nThanks, Sarah",
        date: "2023-11-11T09:45:00",
        read: true,
        labels: ["feature", "planning"],
      },
    ],
  },
  {
    threadid: "qrstuvw",
    thread: [
      {
        id: "e3b5998e-0b6f-4b57-8808-501e95b21e8a",
        name: "David Thompson",
        email: "davidthompson@example.com",
        subject: "Design Mockups",
        text: "Hello everyone,\n\nI've been working on the design mockups for the new website redesign project, and I'd appreciate your feedback.\n\nPlease find the attached files containing the initial mockups for the homepage, product pages, and checkout flow. Let me know if you have any suggestions or changes before we proceed with the development phase.\n\nThanks in advance for your input!\n\nBest regards, David",
        date: "2023-09-15T11:30:00",
        read: true,
        labels: ["design", "website", "mockups"],
      },
      {
        id: "f8e2837d-9c75-4c87-9a45-c31a35a6e293",
        name: "Emily Davis",
        email: "emilydavis@example.com",
        subject: "Re: Design Mockups",
        text: "Hi David,\n\nThe mockups look great! I really like the clean and modern design you've proposed. I have a few minor comments and suggestions:\n\n1. Can we explore a different color scheme for the product pages? The current one feels a bit muted.\n2. The checkout flow could use some additional visual cues to guide users through the process.\n3. Consider adding more whitespace around the call-to-action buttons to make them stand out more.\n\nOverall, I think you're on the right track. Looking forward to discussing these points further.\n\nThanks, Emily",
        date: "2023-09-16T09:00:00",
        read: false,
        labels: ["design", "feedback"],
      },
      {
        id: "1a2b3c4d-5e6f-4b8c-9d0e-f1a2b3c4d5e6",
        name: "Robert Wilson",
        email: "robertwilson@example.com",
        subject: "Re: Design Mockups",
        text: "David, Emily,\n\nI've also taken a look at the mockups, and I agree with Emily's feedback. The overall design direction is great, but we should consider some enhancements to improve the user experience.\n\nAdditionally, I'd like to suggest incorporating some subtle animations or micro-interactions to add a bit of delight to the user interface. This could be something as simple as hover effects or subtle transitions between pages.\n\nLet me know if you need any further input or if you'd like to discuss this in more detail.\n\nThanks, Robert",
        date: "2023-09-16T14:15:00",
        read: false,
        labels: ["design", "ux", "feedback"],
      },
    ],
  },
  {
    threadid: "xyztuvw",
    thread: [
      {
        id: "7c8d9e0a-1b2c-4d3e-5f6g-7h8i9j0k1l2m",
        name: "Jessica Thompson",
        email: "jessicathompson@example.com",
        subject: "Marketing Campaign Proposal",
        text: "Hi everyone,\n\nI've been working on a proposal for our upcoming marketing campaign, and I'd love to get your input.\n\nThe attached document outlines the campaign objectives, target audience, marketing channels, and a tentative timeline. Please review it and let me know if you have any feedback or suggestions.\n\nWe'll need to align on the overall strategy and budget allocation before moving forward.\n\nThanks in advance for your time!\n\nBest regards, Jessica",
        date: "2023-12-01T10:00:00",
        read: false,
        labels: ["marketing", "campaign", "proposal"],
      },
    ],
  },
  {
    threadid: "nopqrst",
    thread: [
      {
        id: "3n4o5p6q-7r8s-9t0u-1v2w-3x4y5z6a7b8c",
        name: "Andrew Wilson",
        email: "andrewwilson@example.com",
        subject: "Quarterly Sales Report",
        text: "Hello team,\n\nI've compiled the quarterly sales report for the last three months. You can find the detailed report and analysis in the attached document.\n\nOverall, we exceeded our sales targets and saw a significant increase in revenue compared to the previous quarter. However, there are a few areas where we can improve and optimize our sales strategies.\n\nPlease review the report, and let's schedule a meeting next week to discuss the findings and plan our next steps. Your input and ideas are invaluable.\n\nThank you all for your hard work and dedication.\n\nBest regards, Andrew",
        date: "2024-01-15T14:30:00",
        read: false,
        labels: ["sales", "report", "analysis"],
      },
    ],
  },
  {
    threadid: "uvwxyza",
    thread: [
      {
        id: "9d0e1f2g-3h4i-5j6k-7l8m-9n0o1p2q3r4s",
        name: "Sophia Martinez",
        email: "sophiamartinez@example.com",
        subject: "New Vendor Partnership",
        text: "Hi everyone,\n\nI'm excited to share that we've secured a partnership with a new vendor that specializes in eco-friendly packaging solutions. This partnership aligns with our company's sustainability goals and can help us reduce our environmental impact.\n\nI've attached a brief overview of the vendor's offerings and the proposed terms of the partnership agreement. Please take a look and let me know if you have any questions or concerns.\n\nWe'll need to discuss the logistics and integration plans during our next meeting.\n\nThanks, Sophia",
        date: "2024-02-20T09:15:00",
        read: true,
        labels: ["vendor", "partnership", "sustainability"],
      },
      {
        id: "5t6u7v8w-9x0y-1z2a-3b4c-5d6e7f8g9h0i",
        name: "Jacob Davis",
        email: "jacobdavis@example.com",
        subject: "Re: New Vendor Partnership",
        text: "Thanks for sharing this, Sophia. This partnership sounds promising, and I'm glad we're taking steps to improve our sustainability efforts.\n\nI've reviewed the overview, and the vendor's offerings seem to align well with our needs. However, I have a few questions regarding the pricing structure and minimum order quantities. Could we discuss these points during the next meeting?\n\nOverall, I'm supportive of moving forward with this partnership, provided we can negotiate favorable terms.\n\nBest regards, Jacob",
        date: "2024-02-21T11:00:00",
        read: false,
        labels: ["vendor", "partnership", "sustainability", "negotiation"],
      },
    ],
  },
];

router.get("/", async (req: Request, res: Response) => {
  const delay = Math.floor(Math.random() * 3000) + 1000; // random delay between 1-4 seconds
  await new Promise((resolve) => setTimeout(resolve, delay));
  setTimeout(() => {
    res.json(threads);
  }, 5000);
});

// Dummy POST API
router.post("/upload-message", (req: Request, res: Response) => {
  const message = req.body;
  console.log("Received message:", message);
  res.status(200).json({ message: "Message received and logged." });
});

export default router;

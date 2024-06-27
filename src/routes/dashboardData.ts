import { Router, Request, Response } from "express";

interface DataGraph {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface StatDashboard {
  title: string;
  value: string;
  icon: string;
}

interface SalesDataItem {
  name: string;
  email: string;
}

export const dataGraph: DataGraph[] = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export const statsDashboard: StatDashboard[] = [
  { title: "Total Sent", value: "2350", icon: "Send" },
  { title: "Open Rate", value: "62%", icon: "MailOpen" },
  { title: "Response Rate", value: "5%", icon: "Eye" },
  { title: "Monthly Target", value: "1249/1500", icon: "Target" },
];

export const recentSalesData: SalesDataItem[] = [
  { name: "Olivia Martin", email: "olivia.martin@email.com" },
  { name: "Jackson Lee", email: "jackson.lee@email.com" },
];

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("hit");
  setTimeout(() => {
    res.json({
      dataGraph,
      statsDashboard,
      recentSalesData,
    });
  }, 5000);
});

export default router;

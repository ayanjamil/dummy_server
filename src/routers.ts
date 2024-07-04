import { Router } from "express";
import threadsRouter from "./routes/threads";
import schedularRouter from "./routes/schedula";
import uploadCSVRouter from "./routes/uploadCSV";
import uploadLocationRouter from "./routes/uploadLocation";
import uploadJobTitlesRouter from "./routes/uploadJobTitlesRouter";
import uploadOutboundKeywordRouter from "./routes/uploadOutboundKeywordRouter";
import uploadBlackListedRouter from "./routes/uploadBlackListsedRouter";
import dashboardDataRouter from "./routes/dashboardData";

export const router = Router();

router.get("/", (_, res) => {
  res.send("Hello, this is demo the demon");
});

// Routes
router.use("/threads", threadsRouter);

router.use("/schedular", schedularRouter);
router.use("/uploadcsv", uploadCSVRouter);
router.use("/uploadlocation", uploadLocationRouter);
router.use("/uploadjobtitles", uploadJobTitlesRouter);
router.use("/uploadkeywords", uploadOutboundKeywordRouter);
router.use("/uploadblacklisted", uploadBlackListedRouter);
router.use("/dashboarddata", dashboardDataRouter);

export default router;

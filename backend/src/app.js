import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import activityRouter from "./routes/activity.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.json());
app.use(express.static(publicPath));
app.use(cors({
  origin: process.env.CLIENT_URL || true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
}));

//server check
// app.get("/", (req, res) => {
//   return res.status(200).json({ message: "Server running" });
// });

app.use("/api/activity", activityRouter);

// SPA fallback
app.get('/{*path}', (_, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});


export default app;

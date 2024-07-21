import express from "express";
import dotenv from "dotenv";

import authRouter from "./routes/auth.route.js";
import subtileRoute from "./routes/subtitle.route.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/subtitle", subtileRoute);

export { app };

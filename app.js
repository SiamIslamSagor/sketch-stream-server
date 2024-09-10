import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import userRoute from "./routes/user.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

connectDB(mongoURI);

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from SketchStream Server!");
});

// user route
app.use("/user", userRoute);

// custom error middleware, this middleware must be used on the bottom of file
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`SketchStream Server is running on port ${PORT}`);
});

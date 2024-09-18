import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import { connectDB } from "./utils/features.js";

import userRoute from "./routes/user.js";
import drawingRoute from "./routes/drawing.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

connectDB(mongoURI);

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://sketch-stream-client.vercel.app",
    ],
    credentials: true,
  })
);
// const corsOptions = {
//   origin: ["https://sketch-stream-client.vercel.app", "http://localhost:5173"], // Allowed origins
//   credentials: true, // Enable sending cookies
// };

// app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World from SketchStream Server!!");
  // console.log("start:", mongoURI, ":end");
});

// user route
app.use("/user", userRoute);
app.use("/drawing", drawingRoute);

// custom error middleware, this middleware must be used on the bottom of file
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`SketchStream Server is running on port ${PORT}`);
});

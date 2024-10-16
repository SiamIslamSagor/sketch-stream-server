import mongoose from "mongoose";
import jwt from "jsonwebtoken";

/* const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  sameSite: "none",
  httpOnly: true,
  secure: true,
}; */

const cookieOptions = {
  maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
};

const connectDB = uri => {
  mongoose
    .connect(uri, {
      dbName: "SketchStream",
    })
    .then(data => {
      console.log(
        `SketchStream DB connected successfully ${data.connection.host}`
      );
    })
    .catch(err => {
      console.log(
        "Failed to connect SketchStream DB, URI: ",
        process.env.MONGO_URI,
        ":URI END"
      );
      console.log(
        "Something is wrong, when connecting with SketchStream DB:",
        err
      );
      throw err;
    });
};

const sendToken = (res, user, code, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  console.log("inside send token");
  return res.status(code).cookie("access-token", token, cookieOptions).json({
    success: true,
    message,
    tokenSend: true,
  });
};

export { connectDB, sendToken, cookieOptions };

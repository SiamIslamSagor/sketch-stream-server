import mongoose from "mongoose";

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
      console.log("Failed to connect SketchStream DB");
      console.log(
        "Something is wrong, when connecting with SketchStream DB:",
        err
      );
      throw err;
    });
};

export { connectDB };

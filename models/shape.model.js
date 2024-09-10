import mongoose, { model, Schema, Types } from "mongoose";

const schema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["rectangle", "circle", "triangle", "line", "arrow", "etc."],
    },

    x: {
      type: Number,
      required: true,
    },

    y: {
      type: Number,
      required: true,
    },

    width: {
      type: Number,
      required: true,
    },

    height: {
      type: Number,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    thickness: {
      type: Number,
      required: true,
    },

    drawing: {
      type: Types.ObjectId,
      ref: "Drawing",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Shape = mongoose.models.Shape || model("Shape", schema);

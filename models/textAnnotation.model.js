import mongoose, { model, Schema, Types } from "mongoose";

const schema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },

    x: {
      type: Number,
      required: true,
    },

    y: {
      type: Number,
      required: true,
    },

    fontSize: {
      type: Number,
      required: true,
    },

    color: {
      type: String,
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
export const TextAnnotation =
  mongoose.models.TextAnnotation || model("TextAnnotation", schema);

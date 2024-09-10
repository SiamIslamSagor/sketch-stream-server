import mongoose, { model, Schema, Types } from "mongoose";

const schema = new Schema(
  {
    x1: {
      type: Number,
      required: true,
    },

    y1: {
      type: Number,
      required: true,
    },

    x2: {
      type: Number,
      required: true,
    },

    y2: {
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
export const Line = mongoose.models.Line || model("Line", schema);

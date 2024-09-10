import mongoose, { model, Schema } from "mongoose";

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    lines: [
      {
        type: Schema.Types.ObjectId,
        ref: "Line",
      },
    ],

    shapes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Shape",
      },
    ],

    textAnnotations: [
      {
        type: Schema.Types.ObjectId,
        ref: "TextAnnotation",
      },
    ],
  },
  {
    timestamps: true,
  }
);
export const Drawing = mongoose.models.Drawing || model("Drawing", schema);

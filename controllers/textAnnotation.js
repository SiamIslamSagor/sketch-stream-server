import { TryCatch } from "../middlewares/error.js";
import { TextAnnotation } from "../models/textAnnotation.model.js";

const createTextAnnotation = TryCatch(async (req, res, next) => {
  const textAnnotation = new TextAnnotation(req.body);
  await textAnnotation.save();
  res.status(201).json(textAnnotation);
});

const getTextAnnotations = TryCatch(async (req, res, next) => {
  const textAnnotations = await TextAnnotation.find();
  res.json(textAnnotations);
});

const getTextAnnotation = TryCatch(async (req, res, next) => {
  const textAnnotation = await TextAnnotation.findById(req.params.id);
  if (!textAnnotation) {
    res.status(404).json({ message: "Text annotation not found" });
  } else {
    res.json(textAnnotation);
  }
});

const updateTextAnnotation = TryCatch(async (req, res, next) => {
  const textAnnotation = await TextAnnotation.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!textAnnotation) {
    res.status(404).json({ message: "Text annotation not found" });
  } else {
    res.json(textAnnotation);
  }
});

const deleteTextAnnotation = TryCatch(async (req, res, next) => {
  await TextAnnotation.findByIdAndRemove(req.params.id);
  res.status(204).json({ message: "Text annotation deleted" });
});

export {
  createTextAnnotation,
  getTextAnnotation,
  getTextAnnotations,
  updateTextAnnotation,
  deleteTextAnnotation,
};

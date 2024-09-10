import { TryCatch } from "../middlewares/error.js";
import { Drawing } from "../models/drawing.model.js";

export const createDrawing = TryCatch(async (req, res, next) => {
  const drawing = new Drawing(req.body);
  await drawing.save();
  res.status(201).json(drawing);
});

export const getDrawings = TryCatch(async (req, res, next) => {
  const drawings = await Drawing.find();
  res.json(drawings);
});

export const getDrawing = TryCatch(async (req, res, next) => {
  const drawing = await Drawing.findById(req.params.id);
  if (!drawing) {
    res.status(404).json({ message: "Drawing not found" });
  } else {
    res.json(drawing);
  }
});

export const updateDrawing = TryCatch(async (req, res, next) => {
  const drawing = await Drawing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!drawing) {
    res.status(404).json({ message: "Drawing not found" });
  } else {
    res.json(drawing);
  }
});

export const deleteDrawing = TryCatch(async (req, res, next) => {
  await Drawing.findByIdAndRemove(req.params.id);
  res.status(204).json({ message: "Drawing deleted" });
});

export { createDrawing, getDrawing, getDrawings, updateDrawing, deleteDrawing };

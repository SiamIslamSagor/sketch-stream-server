import { TryCatch } from "../middlewares/error.js";
import { Shape } from "../models/shape.model.js";

const createShape = TryCatch(async (req, res, next) => {
  const shape = new Shape(req.body);
  await shape.save();
  res.status(201).json(shape);
});

const getShapes = TryCatch(async (req, res, next) => {
  const shapes = await Shape.find();
  res.json(shapes);
});

const getShape = TryCatch(async (req, res, next) => {
  const shape = await Shape.findById(req.params.id);
  if (!shape) {
    res.status(404).json({ message: "Shape not found" });
  } else {
    res.json(shape);
  }
});

const updateShape = TryCatch(async (req, res, next) => {
  const shape = await Shape.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!shape) {
    res.status(404).json({ message: "Shape not found" });
  } else {
    res.json(shape);
  }
});

const deleteShape = TryCatch(async (req, res, next) => {
  await Shape.findByIdAndRemove(req.params.id);
  res.status(204).json({ message: "Shape deleted" });
});

export { createShape, deleteShape, getShape, getShapes, updateShape };

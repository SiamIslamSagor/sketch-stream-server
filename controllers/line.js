import { TryCatch } from "../middlewares/error.js";
import { Line } from "../models/line.model.js";

const createLine = TryCatch(async (req, res, next) => {
  const line = new Line(req.body);
  await line.save();
  res.status(201).json(line);
});

const getLines = TryCatch(async (req, res, next) => {
  const lines = await Line.find();
  res.json(lines);
});

const getLine = TryCatch(async (req, res, next) => {
  const line = await Line.findById(req.params.id);
  if (!line) {
    res.status(404).json({ message: "Line not found" });
  } else {
    res.json(line);
  }
});

const updateLine = TryCatch(async (req, res, next) => {
  const line = await Line.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!line) {
    res.status(404).json({ message: "Line not found" });
  } else {
    res.json(line);
  }
});

const deleteLine = TryCatch(async (req, res, next) => {
  await Line.findByIdAndRemove(req.params.id);
  res.status(204).json({ message: "Line deleted" });
});

export { createLine, deleteLine, getLine, getLines, updateLine };

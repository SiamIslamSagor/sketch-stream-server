import { TryCatch } from "../middlewares/error.js";
import { Drawing } from "../models/drawing.model.js";

const createDrawing = TryCatch(async (req, res, next) => {
  const data = req.body;
  const drawingData = {
    title: "my drawing",
    lines: data.lines.map(line => JSON.parse(line)),
    straightLines: data.straightLines.map(line => JSON.parse(line)),
    rectangles: data.rectangles.map(rect => JSON.parse(rect)),
    circles: data.circles.map(circle => JSON.parse(circle)),
    ellipses: data.ellipses.map(ellipse => JSON.parse(ellipse)),
    squares: data.squares.map(square => JSON.parse(square)),
    texts: data.texts.map(text => ({ ...text })),
  };

  // save the drawing data
  const drawing = await Drawing.create(drawingData);

  res.status(201).json({
    success: true,
    message: "Drawing saved successfully",
    drawing,
  });
});

const getDrawings = TryCatch(async (req, res, next) => {
  const drawings = await Drawing.find();
  res.json(drawings);
});

const getDrawing = TryCatch(async (req, res, next) => {
  const drawing = await Drawing.findById(req.params.id);
  if (!drawing) {
    res.status(404).json({ message: "Drawing not found" });
  } else {
    res.json(drawing);
  }
});

const updateDrawing = TryCatch(async (req, res, next) => {
  const drawing = await Drawing.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!drawing) {
    res.status(404).json({ message: "Drawing not found" });
  } else {
    res.json(drawing);
  }
});

const deleteDrawing = TryCatch(async (req, res, next) => {
  await Drawing.findByIdAndRemove(req.params.id);
  res.status(204).json({ message: "Drawing deleted" });
});

export { createDrawing, getDrawing, getDrawings, updateDrawing, deleteDrawing };

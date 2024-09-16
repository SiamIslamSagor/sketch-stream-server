import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createDrawing } from "../controllers/drawing.js";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new", createDrawing);

export default app;

import { Drawing } from "../models/drawing.model.js";
import { Line } from "../models/line.model.js";
import { Shape } from "../models/shape.model.js";
import { TextAnnotation } from "../models/textAnnotation.model.js";

// Sample Data 1
const drawing1 = new Drawing({
  title: "My First Drawing",
});

const line1 = new Line({
  x1: 10,
  y1: 20,
  x2: 30,
  y2: 40,
  color: "blue",
  thickness: 2,
  drawing: drawing1._id,
});

const shape1 = new Shape({
  type: "rectangle",
  x: 50,
  y: 60,
  width: 70,
  height: 80,
  color: "red",
  thickness: 3,
  drawing: drawing1._id,
});

const textAnnotation1 = new TextAnnotation({
  text: "Hello World!",
  x: 100,
  y: 120,
  fontSize: 24,
  color: "green",
  drawing: drawing1._id,
});

drawing1.save((err, drawing) => {
  if (err) {
    console.error(err);
  } else {
    line1.save((err, line) => {
      if (err) {
        console.error(err);
      } else {
        shape1.save((err, shape) => {
          if (err) {
            console.error(err);
          } else {
            textAnnotation1.save((err, textAnnotation) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Sample Data 1 saved successfully!");
              }
            });
          }
        });
      }
    });
  }
});

// Sample Data 2
const drawing2 = new Drawing({
  title: "My Second Drawing",
});

const line2 = new Line({
  x1: 150,
  y1: 160,
  x2: 170,
  y2: 180,
  color: "yellow",
  thickness: 4,
  drawing: drawing2._id,
});

const shape2 = new Shape({
  type: "circle",
  x: 190,
  y: 200,
  width: 30,
  height: 30,
  color: "purple",
  thickness: 5,
  drawing: drawing2._id,
});

const textAnnotation2 = new TextAnnotation({
  text: "Hello Again!",
  x: 220,
  y: 240,
  fontSize: 36,
  color: "orange",
  drawing: drawing2._id,
});

drawing2.save((err, drawing) => {
  if (err) {
    console.error(err);
  } else {
    line2.save((err, line) => {
      if (err) {
        console.error(err);
      } else {
        shape2.save((err, shape) => {
          if (err) {
            console.error(err);
          } else {
            textAnnotation2.save((err, textAnnotation) => {
              if (err) {
                console.error(err);
              } else {
                console.log("Sample Data 2 saved successfully!");
              }
            });
          }
        });
      }
    });
  }
});

export {
  drawing1,
  drawing2,
  line1,
  line2,
  shape1,
  shape2,
  textAnnotation1,
  textAnnotation2,
};

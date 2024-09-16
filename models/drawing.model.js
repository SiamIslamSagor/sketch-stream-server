import mongoose, { model, Schema } from "mongoose";

const lineSchema = new Schema({
  attrs: {
    points: [[Number]],
    stroke: String,
    strokeWidth: Number,
    lineCap: String,
    lineJoin: String,
  },
  className: String,
});

const straightLineSchema = new Schema({
  attrs: {
    points: [[Number]],
    stroke: String,
    strokeWidth: Number,
    lineCap: String,
    lineJoin: String,
  },
  className: String,
});

const rectangleSchema = new Schema({
  attrs: {
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    fill: String,
    stroke: String,
    strokeWidth: Number,
  },
  className: String,
});

const circleSchema = new Schema({
  attrs: {
    x: Number,
    y: Number,
    radius: Number,
    fill: String,
    stroke: String,
    strokeWidth: Number,
  },
  className: String,
});

const ellipseSchema = new Schema({
  attrs: {
    x: Number,
    y: Number,
    radiusX: Number,
    radiusY: Number,
    stroke: String,
    fill: String,
    strokeWidth: Number,
  },
  className: String,
});

const squareSchema = new Schema({
  attrs: {
    x: Number,
    y: Number,
    width: Number,
    height: Number,
    fill: String,
    stroke: String,
    strokeWidth: Number,
  },
  className: String,
});

const textSchema = new Schema({
  x: Number,
  y: Number,
  text: String,
  fontSize: Number,
  draggable: Boolean,
});

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    lines: [lineSchema],
    straightLines: [straightLineSchema],
    rectangles: [rectangleSchema],
    circles: [circleSchema],
    ellipses: [ellipseSchema],
    squares: [squareSchema],
    texts: [textSchema],
  },
  {
    timestamps: true,
  }
);

export const Drawing = mongoose.models.Drawing || model("Drawing", schema);

const x = {
  lines: [
    '{"attrs":{"points":[143,155,167,163,192,172,209,178,220,182,231,184,238,187,244,187,248,189,254,189,261,190,265,190,271,190,275,190,279,190,286,190,289,188,292,188,293,188,294,187,295,187,298,186,299,186,300,186,301,185,302,185,303,184,304,184,304,183,306,183,307,181,308,180,309,179,311,177,314,172,316,168,319,166,322,162,323,159,326,156,326,155,327,154,328,153,329,152,329,149,330,148,332,147,333,147,333,146,333,145,334,143,334,141,335,140,335,139,335,137,335,136,335,133,333,130,333,128,332,127,331,124,330,123,329,123,328,122,326,121,325,121,324,121,323,120,321,118,318,118,317,118,316,118,315,118,313,118,311,118,310,118,307,119,305,119,304,119,301,120,300,120,298,120,296,121,295,122,294,122,293,123,292,124,291,126,290,126,288,127,287,127,286,129,285,129,284,130,283,131,283,133,282,134,282,136,282,137,282,140,282,142,282,143,282,145,282,147,284,148,286,151,289,152,291,154,300,157,306,157,316,157,322,157,328,157,334,157,337,157,343,156,347,157,355,157,369,159,422,179,444,193,470,209,480,219,487,226,493,233],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
    '{"attrs":{"points":[134,97,140,101,147,106,152,110,158,114,163,117,167,120,170,121,174,124,179,127,185,130,190,133,198,138],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
    '{"attrs":{"points":[93,242],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
    '{"attrs":{"points":[93,242,93,242],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
    '{"attrs":{"points":[109,270,120,270,128,270,137,271,145,271,153,271,161,271,170,271,178,271,187,270,197,270,206,270,216,270,222,270,230,270,235,270,241,270,243,270,246,269,249,269,251,267,252,267,256,266,259,265,263,263,266,262,271,259,273,257,276,256,279,255,281,255,283,254,284,252,286,251,287,250],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
  ],
  straightLines: [
    '{"attrs":{"points":[230,167,412,191],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
    '{"attrs":{"points":[267,229,471,24],"stroke":"#000000","strokeWidth":1,"lineCap":"round","lineJoin":"round"},"className":"Line"}',
  ],
  rectangles: [
    '{"attrs":{"x":153,"y":136,"width":181,"height":16,"fill":"","stroke":"#000000","strokeWidth":1},"className":"Rect"}',
    '{"attrs":{"x":159,"y":203,"width":130,"height":61,"fill":"","stroke":"#000000","strokeWidth":1},"className":"Rect"}',
  ],
  circles: [
    '{"attrs":{"x":232,"y":49,"radius":120.10412149464314,"fill":"","stroke":"#000000","strokeWidth":1},"className":"Circle"}',
  ],
  ellipses: [
    '{"attrs":{"x":84,"y":155,"radiusX":93,"radiusY":32,"stroke":"#000000","fill":"","strokeWidth":1},"className":"Ellipse"}',
    '{"attrs":{"x":319,"y":201,"radiusX":118,"radiusY":130,"stroke":"#000000","fill":"","strokeWidth":1},"className":"Ellipse"}',
    '{"attrs":{"x":437,"y":71,"radiusX":26,"radiusY":22,"stroke":"#000000","fill":"","strokeWidth":1},"className":"Ellipse"}',
  ],
  squares: [
    '{"attrs":{"x":260,"y":194,"width":-88,"height":-88,"fill":"","stroke":"#000000","strokeWidth":1},"className":"Rect"}',
  ],
  texts: [
    {
      x: 72,
      y: 235,
      text: "jkjhkjh",
      fontSize: 18,
      draggable: true,
    },
  ],
};

// import * as fabric from 'fabric';
const patternBrushCanvas = (canvasIns) => {
  const brush = new fabric.PatternBrush(canvasIns);
  brush.width = 10;
  brush.color = 'green';
  // brush.strokeLineJoin = 'bevel';
  // brush.strokeLineCap = 'round';
  return brush;
};
export default patternBrushCanvas;

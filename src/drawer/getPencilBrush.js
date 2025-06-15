// import * as fabric from 'fabric';
const pencilBrushCanvas = (canvasIns) => {
  const brush = new fabric.PencilBrush(canvasIns);
  brush.width = 10;
  brush.color = 'red';
  brush.strokeLineJoin = 'bevel';
  brush.strokeLineCap = 'round';
  return brush;
};
export default pencilBrushCanvas;

// import * as fabric from 'fabric';
// import { EraserBrush } from 'fabricjs/eraser';
// import 'fabric-eraser-brush';
// import '../../eraz';
export default function (fabricCanvas) {
  // fabric.EraserBrush = EraserBrush;
  const brush = new fabric.EraserBrush(fabricCanvas);
  brush.width = 10;
  return brush;
}

function getLightBrush(canvasIns, opt) {
  const conf = opt ?? { width: 30, color: '#afafaf' };
  const brush = new fabric.PencilBrush(canvasIns);
  brush.color = conf.color || '#afafaf';
  brush.width = conf.width || 30;
  brush.strokeLineCap = 'square';
  brush.strokeLineJoin = 'round';
  brush.opacity = 0.3; // 可以调整透明度，模拟高亮效果
  return brush;
}
export default getLightBrush;

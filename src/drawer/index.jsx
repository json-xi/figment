// import * as fabric from 'fabric';
import { useEffect, useState, useRef } from 'react';
import pencilBrushCanvas from './getPencilBrush';
import patternBrushCanvas from './getPatternBrush';
import eraserBrushCanvas from './getEraserBrush';
const Drawer = (props) => {
  const canvasRef = useRef(null);
  const [canvasIns, setCanvasIns] = useState(null);
  useEffect(() => {
    const options = {
      isDrawingMode: true,
      width: window.innerWidth,
      height: window.innerHeight,
      // backgroundColor: 'red', /
    };
    const canvas = new fabric.Canvas(canvasRef.current, options);

    setCanvasIns(canvas);
    canvas.freeDrawingBrush = pencilBrushCanvas(canvas);
    const resizeCanvas = () => {
      canvas.renderAll();
    };
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.dispose();
    };
  }, []);
  useEffect(() => {
    const oMapAction = {
      pencil: pencilBrushCanvas,
      pattern: patternBrushCanvas,
      eraser: eraserBrushCanvas,
    };
    canvasIns &&
      oMapAction[props.brushType] &&
      (canvasIns.freeDrawingBrush = oMapAction[props.brushType](canvasIns));
    // canvasIns.renderAll();
  }, [props.brushType]);
  return <canvas width={'100vw'} height={'100vh'} ref={canvasRef} />;
};

export default Drawer;

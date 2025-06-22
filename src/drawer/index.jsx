// import * as fabric from 'fabric';
import { useEffect, useState, useRef } from 'react';
import pencilBrushCanvas from './getPencilBrush';
import getTapeBrush from './getPatternBrush';
import getLightBrush from './getLightBrush';
import eraserBrushCanvas from './getEraserBrush';
import styled, { css } from 'styled-components';
const ContainerCanvas = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 98;
`;
const Drawer = ({ directive }) => {
  const canvasRef = useRef(null);
  const [canvasIns, setCanvasIns] = useState(null);
  // 设置鼠标样式
  function setCanvasCursor(canvasIns, directive) {
    const cursorMap = {
      selection: 'url("/src/assets/cursor-select.svg"), auto',
      hand: 'url("/src/assets/cursor-hand.svg"), auto',
      pencil: 'url("/src/assets/cursor-pencil.png"), auto',
      light: 'url("/src/assets/cursor-light.svg"), auto',
      tape: 'url("/src/assets/cursor-tape.svg"), auto',
      eraser: 'url("/src/assets/cursor-eraser.svg"), auto',
    };

    const cursor = cursorMap[directive] || cursorMap.selection;
    // 鼠标样式
    canvasIns.hoverCursor = cursor;
    canvasIns.defaultCursor = cursor;
    // 避免笔刷被覆盖
    canvasIns.freeDrawingCursor = cursor;

    canvasIns.renderAll(); // 可选：强制刷新
  }
  useEffect(() => {
    const options = {
      isDrawingMode: false,
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const canvas = new fabric.Canvas(canvasRef.current, options);
    setCanvasIns(canvas);
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
    if (!canvasIns) return;

    if (['pencil', 'eraser', 'tape', 'light'].includes(directive)) {
      canvasIns.isDrawingMode = true;
      const oMapAction = {
        pencil: pencilBrushCanvas,
        eraser: eraserBrushCanvas,
        light: getLightBrush,
        tape: getTapeBrush,
      };

      oMapAction[directive] &&
        (canvasIns.freeDrawingBrush = oMapAction[directive](canvasIns, { color: 'yellow' }));
    } else {
      canvasIns.isDrawingMode = false;
    }
    setCanvasCursor(canvasIns, directive);
    canvasIns.renderAll();
  }, [directive, canvasIns]);
  return (
    <ContainerCanvas $current={directive}>
      <canvas ref={canvasRef} />
    </ContainerCanvas>
  );
};

export default Drawer;

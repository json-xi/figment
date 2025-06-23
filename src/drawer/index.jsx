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
  const fabricRef = useRef(null);
  // const [canvasIns, setCanvasIns] = useState(null);
  // 添加图片
  function addImage(imgUrl) {
    fabric.Image.fromURL(imgUrl, (imgInstance) => {
      // 缩放
      // 等比缩放60%
      const scale = 0.6;
      imgInstance.scale(scale);
      debugger;

      // 画布中心
      const canvasXCenter = fabricRef.current.width / 2;
      const canvasYCenter = fabricRef.current.height / 2;
      // 图片位置
      const imgX = canvasXCenter - imgInstance.width / 2;
      const imgY = canvasYCenter - imgInstance.height / 2;

      imgInstance.set({
        left: imgX,
        top: imgY,
        originX: 'left',
        originY: 'top',
      });
      // 渲染
      fabricRef.current.add(imgInstance);
      fabricRef.current.renderAll();
    });
  }
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
    // setCanvasIns(canvas);
    fabricRef.current = canvas;
    const resizeCanvas = () => {
      canvas.renderAll();
    };
    window.addEventListener('resize', resizeCanvas);
    __EE__.on('_fabric_add_image', addImage);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      __EE__.removeListener('_fabric_add_image', addImage);
      canvas.dispose();
    };
  }, []);
  useEffect(() => {
    if (!fabricRef.current) return;

    // 笔刷类
    if (['pencil', 'eraser', 'tape', 'light'].includes(directive)) {
      fabricRef.current.isDrawingMode = true;
      const oMapAction = {
        pencil: pencilBrushCanvas,
        eraser: eraserBrushCanvas,
        light: getLightBrush,
        tape: getTapeBrush,
      };

      oMapAction[directive] &&
        (fabricRef.current.freeDrawingBrush = oMapAction[directive](fabricRef.current, {
          color: 'yellow',
        }));
    } else {
      fabricRef.current.isDrawingMode = false;
    }

    // 图片编辑类
    if (['imageEraser', 'cropper', 'mirrorX', 'mirrorY']) {
      // TODO
    }

    // 设置鼠标样式
    setCanvasCursor(fabricRef.current, directive);
    fabricRef.current.renderAll();
  }, [directive, fabricRef.current]);
  return (
    <ContainerCanvas $current={directive}>
      <canvas ref={canvasRef} />
    </ContainerCanvas>
  );
};

export default Drawer;

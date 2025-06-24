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
let currentImage;
let cropRect;
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

      // 画布中心
      const canvasXCenter = fabricRef.current.width / 2;
      const canvasYCenter = fabricRef.current.height / 2;
      // 图片位置
      const imgX = canvasXCenter - (imgInstance.width * scale) / 2;
      const imgY = canvasYCenter - (imgInstance.height * scale) / 2;

      imgInstance.set({
        left: imgX,
        top: imgY,
        originX: 'left',
        originY: 'top',
      });
      currentImage = imgInstance;
      // 渲染
      fabricRef.current.add(imgInstance);
      fabricRef.current.renderAll();
    });
  }
  // 设置鼠标样式
  function setCanvasCursor(canvasIns, directive) {
    const cursorMap = {
      selection: 'url("/src/assets/cursor-select.svg") 16 14, auto',
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
  // 添加图片边框
  function addCropperBox() {
    const scale = 0.6;

    // 画布中心
    const canvasXCenter = fabricRef.current.width / 2;
    const canvasYCenter = fabricRef.current.height / 2;
    // 图片位置
    const left = canvasXCenter - (currentImage.width * scale) / 2;
    const top = canvasYCenter - (currentImage.height * scale) / 2;

    const rect = new fabric.Rect({
      left,
      top,
      width: currentImage.width * scale,
      height: currentImage.height * scale,
      fill: 'rgba(0,0,0,0.3)',
      selectable: true,
      hasBorders: true,
      hasControls: true,
      borderColor: 'red',
      cornerColor: 'red',
    });
    cropRect = rect;
    fabricRef.current.add(rect);
    fabricRef.current.setActiveObject(rect);
  }
  // 截图
  function cropperImage() {
    const canvas = fabricRef.current;
    if (currentImage && cropRect) {
      const scaleX = currentImage.scaleX;
      const scaleY = currentImage.scaleY;

      const { left, top, width, height } = cropRect.getBoundingRect();
      const scaledLeft = (left - currentImage.left) / scaleX;
      const scaledTop = (top - currentImage.top) / scaleY;
      const scaledWidth = width / scaleX;
      const scaledHeight = height / scaleY;

      // Create an intermediate canvas to draw the cropped image
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = scaledWidth;
      croppedCanvas.height = scaledHeight;
      const ctx = croppedCanvas.getContext('2d');

      ctx.drawImage(
        currentImage.getElement(),
        scaledLeft,
        scaledTop,
        scaledWidth,
        scaledHeight,
        0,
        0,
        scaledWidth,
        scaledHeight,
      );

      const croppedDataUrl = croppedCanvas.toDataURL();
      fabric.Image.fromURL(croppedDataUrl, (croppedImg) => {
        // Center the cropped image
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        croppedImg.set({
          left: centerX - scaledWidth / 2,
          top: centerY - scaledHeight / 2,
          originX: 'left',
          originY: 'top',
        });

        canvas.remove(currentImage);
        canvas.remove(cropRect);
        canvas.remove(cropRect.mask);
        canvas.add(croppedImg);
        canvas.renderAll();
        currentImage = croppedImg;
        window.removeEventListener('keydown', cropperImage);
      });
    }
  }

  // 图片编辑
  function runDirective(directive) {
    if (directive === 'imageEraser') {
      fabricRef.current.isDrawingMode = true;
      fabricRef.current.freeDrawingBrush = eraserBrushCanvas(fabricRef.current);
      fabricRef.current.renderAll();
    } else {
      fabricRef.current.isDrawingMode = false;
      fabricRef.current.freeDrawingBrush = null;
    }

    if (directive === 'mirrorX') {
      currentImage.set({
        flipX: true,
        hasControls: true, // 不显示控制器
        hasBorders: true, // 不显示边框
      });
      fabricRef.current.renderAll();
    } else if (directive === 'mirrorY') {
      currentImage.set({
        flipY: true,
        hasControls: true, // 不显示控制器
        hasBorders: true, // 不显示边框
      });
      fabricRef.current.renderAll();
    } else if (directive === 'cropper') {
      addCropperBox();
      window.addEventListener('keydown', cropperImage);
    }
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
    if (['imageEraser', 'cropper', 'mirrorX', 'mirrorY'].includes(directive)) {
      currentImage && runDirective(directive);
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

import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
const BackGroundContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;
const DotBackground = () => {
  const canvasRef = useRef(null);
  const createPattern = () => {
    // 画布
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 20;

    //   绘制
    const dotCanvas = canvas.getContext('2d');
    dotCanvas.beginPath();
    dotCanvas.arc(5, 5, 1, 0, Math.PI * 2);
    dotCanvas.fillStyle = '#c4c4c4';
    dotCanvas.fill();
    return new fabric.Pattern({
      source: canvas,
      repeat: 'repeat',
    });
  };
  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current);
    const resizeCanvas = () => {
      // 初始化 fabric.Canvas
      fabricCanvas.setHeight(window.innerHeight);
      fabricCanvas.setWidth(window.innerWidth);

      // 创建纹理
      const pattern = createPattern();
      //设置背景
      fabricCanvas.setBackgroundColor(pattern, fabricCanvas.renderAll.bind(fabricCanvas));
    };
    resizeCanvas();

    window.addEventListener('resize', resizeCanvas);
    // 清理函数（可选）
    return () => {
      fabricCanvas.dispose();
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <BackGroundContainer>{<canvas ref={canvasRef} />}</BackGroundContainer>;
};

export default DotBackground;

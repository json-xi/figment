import React, { useRef, useEffect } from 'react';
// import { fabric } from 'fabric';

const DotBackground = () => {
  const canvasRef = useRef(null);
  const createPattern = () => {
    // 画布
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;

    //   绘制
    const dotCanvas = canvas.getContext('2d');
    dotCanvas.beginPath();
    dotCanvas.arc(5, 5, 1, 0, Math.PI * 2);
    dotCanvas.fillStyle = 'gray';
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

  return <canvas ref={canvasRef} />;
};

export default DotBackground;

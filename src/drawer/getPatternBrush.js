import tapeImage from '@/assets/image (1).png';
export default function getTapeBrush(canvas) {
  const tapeBrush = new fabric.PatternBrush(canvas);

  const getSource = () => {
    const img = new Image();
    img.src = tapeImage;
    img.crossOrigin = 'anonymous'; // 多写一句，兼容远程图

    return img;
  };

  tapeBrush.source = getSource();
  tapeBrush.width = 20;
  return tapeBrush;
}

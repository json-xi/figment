import { useState, useEffect } from 'react';
import Drawer from '@/drawer';
import styled from 'styled-components';
import Tools from './tools';
import DotBackGround from './components/dotBackGroup';
import SubBrushMenu from '@/tools/SubBrushMenu.jsx';
import ImageEditMenu from '@/tools/ImageEditMenu.jsx';
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const aBrushType = ['pencil', 'light', 'tape', 'eraser'];
const aImageEdit = ['imageEraser', 'cropper', 'mirrorX', 'mirrorY', 'imageEdit'];
const App = () => {
  const [activeType, setActiveTypeType] = useState('selection');

  function activeTypeChange(activeType) {
    console.log('activeTy', activeType);

    setActiveTypeType(activeType);
  }
  useEffect(() => {
    __EE__.on('activeTypeChange', activeTypeChange);
    return () => {
      __EE__.removeListener('activeTypeChange', activeTypeChange);
    };
  }, []);

  return (
    <Container>
      <DotBackGround></DotBackGround>
      <Drawer directive={activeType}></Drawer>
      <Tools directive={activeType}></Tools>
      {aBrushType.includes(activeType) && <SubBrushMenu directive={activeType}></SubBrushMenu>}
      {aImageEdit.includes(activeType) && <ImageEditMenu directive={activeType}></ImageEditMenu>}
    </Container>
  );
};
export default App;

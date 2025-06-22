import { useState, useEffect } from 'react';
import Drawer from '@/drawer';
import styled from 'styled-components';
import Tools from './tools';
import DotBackGround from './components/dotBackGroup';
import SubBrushMenu from '@/tools/SubBrushMenu.jsx';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const aBrushType = ['pencil', 'light', 'tape', 'eraser'];
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
    </Container>
  );
};
export default App;

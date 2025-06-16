import { useState, useEffect } from 'react';
import Drawer from '@/drawer';
import { Flex, Button } from 'antd';
import styled from 'styled-components';
import Tools from './tools';
import DotBackGround from './components/dotBackGroup';
const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgba(240, 242, 245, 1); */
`;

const App = () => {
  const [brushType, setBrushType] = useState();
  const [activeType, setActiveTypeType] = useState();

  function activeTypeChange(activeType) {
    console.log('activeTy', activeType);

    setActiveTypeType(activeType);
  }
  useEffect(() => {
    __EE__.on('activeTypeChange', activeTypeChange);
    return () => {};
  }, []);

  const onChangeBrush = (type) => {
    setBrushType(type);
  };
  return (
    <Container>
      {/* <Drawer activeType={activeType}></Drawer> */}
      <Tools directive={activeType}></Tools>
      <DotBackGround></DotBackGround>
    </Container>
  );
};
export default App;

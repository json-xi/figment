import React from 'react';
import styled from 'styled-components';
import Circle from '@/assets/tools-graph-1.svg?react';
import Square from '@/assets/tools-graph-2.svg?react';
import Triangle from '@/assets/tools-graph-3.svg?react';
import Connector from '@/assets/tools-graph-4.svg?react';
const BackContainer = styled.div`
  padding-left: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;
const OuterContaner = styled.div`
  width: 90px;
  height: 80px;
  overflow: hidden;
  transition: all 0.2s;
  &:hover {
    transform: translateY(-20px);
    height: 100px;
  }
`;
const Container = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18));
  & svg {
    width: 40px;
    height: 40px;
  }
  &.cir {
    transform: translateY(5px);
  }
  &.squar {
    transform: translateY(5px);
  }
  &:hover {
    transform: scale(1.1);
  }
`;
const Geometry = () => {
  return (
    <BackContainer>
      <OuterContaner>
        <Container className="cir">
          <Circle></Circle>
        </Container>
        <Container className="squar">
          <Square></Square>
        </Container>
        <Container>
          <Triangle></Triangle>
        </Container>
        <Container>
          <Connector></Connector>
        </Container>
      </OuterContaner>
    </BackContainer>
  );
};

export default Geometry;

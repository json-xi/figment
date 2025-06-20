import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  height: 48px;
  width: 274px;
  position: absolute;
  box-sizing: border-box;
  /* top: -48px; */
  left: 50%;
  /* transform: translateX(-44px); */
  bottom: 20px;
  z-index: -1;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px #00000026, 0 2px 6px 1px #00000017, 0 3px 16px #00000014;
  border-radius: 14px 14px 0 0;
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.17, 0.53, 0.3, 1);
  /* background-color: red; */
`;
const SubBrushMenu = ({ directive }) => {
  return <Container>SubBrushMenu</Container>;
};

export default SubBrushMenu;

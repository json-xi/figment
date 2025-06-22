import { Flex } from 'antd';
import React from 'react';
import styled, { css } from 'styled-components';
import BrushLightSVG from '@/assets/tools-brush-light.svg?react';
import BrushPencilSVG from '@/assets/tools-brush-pencil.svg?react';

const Container = styled.div`
  height: 48px;
  width: 274px;
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-70%);
  bottom: 100px;
  z-index: 98;
  background-color: #f5f5f5;
  box-shadow: 0 0 0 1px #00000026, 0 2px 6px 1px #00000017, 0 3px 16px #00000014;
  border-radius: 14px 14px 0 0;
  transition-property: transform, opacity;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.17, 0.53, 0.3, 1);
`;
const ActionContainer = styled.div`
  width: 64px;
  height: 69px;
  ${(props) => {
    if (props.$current) {
      return css`
        transform: translateY(-20px);
      `;
    }
  }}
  &:hover {
    transform: translateY(-20px);
  }
  & svg {
    width: 64px;
    height: 69px;
  }
`;

const Tape = styled.div`
  width: 64px;
  height: 69px;
  background-image: url('/src/assets/tape.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
const Eraser = styled.div`
  width: 64px;
  height: 69px;
  background-image: url('/src/assets/muti-image.png');
`;
const SubBrushMenu = (props) => {
  const changeCurrentBrush = (brush) => {
    __EE__.emit('activeTypeChange', brush);
  };

  return (
    <Container>
      <Flex>
        <ActionContainer
          $current={props.directive === 'pencil'}
          onClick={() => {
            changeCurrentBrush('pencil');
          }}
          className="pencil"
        >
          <BrushPencilSVG></BrushPencilSVG>
        </ActionContainer>
        <ActionContainer
          $current={props.directive === 'light'}
          onClick={() => {
            changeCurrentBrush('light');
          }}
          className="light"
        >
          <BrushLightSVG></BrushLightSVG>
        </ActionContainer>
        <ActionContainer
          $current={props.directive === 'tape'}
          onClick={() => {
            changeCurrentBrush('tape');
          }}
          className="tape"
        >
          <Tape></Tape>
        </ActionContainer>
        <ActionContainer
          $current={props.directive === 'eraser'}
          onClick={() => {
            changeCurrentBrush('eraser');
          }}
          className="eraser"
        >
          <Eraser></Eraser>
        </ActionContainer>
      </Flex>
    </Container>
  );
};

export default SubBrushMenu;

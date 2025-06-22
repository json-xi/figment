import React from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import BrushLightSVG from '@/assets/tools-brush-light.svg?react';
import BrushPencilSVG from '@/assets/tools-brush-pencil.svg?react';
import { Flex } from 'antd';
const ActionBox = styled.div`
  width: 72px;
  height: 80px;
  box-sizing: content-box;
  position: relative;
  z-index: 0;
  ${(props) => {
    return props.$current
      ? css`
          background-color: #0000000f;
        `
      : null;
  }}
  &:hover {
    background-color: #0000000f;
  }
`;
const BrushContainer = styled.div`
  position: absolute;
  width: 72px;
  height: 80px;
  overflow: hidden;
  /* transition: all 0.2s; */

  &:hover {
    ${(props) => {
      return !props.$current
        ? css`
            top: -34px;
            height: 114px;
          `
        : null;
    }}
  }
  ${(props) => {
    if (props.$directive === 'light') {
      return css`
        transform: translateY(-20px);
        height: 100px;
      `;
    }
  }}
`;
const Tape = styled.div`
  width: 62px;
  height: 180px;
  background-image: url('/src/assets/tape.png');
  background-size: contain;
  background-repeat: no-repeat;
`;
const Eraser = styled.div`
  width: 60px;
  height: 136px;
  background-image: url('/src/assets/muti-image.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -8px 0;
`;
const Brush = ({ directive }) => {
  const getBrush = () => {
    switch (directive) {
      case 'pencil':
        return <BrushPencilSVG width="42" height="136" />;
      case 'light':
        return <BrushLightSVG width="42" height="136" />;
      case 'tape':
        return <Tape />;
      case 'eraser':
        return <Eraser />;
      default:
        return <BrushPencilSVG width="42" height="136" />;
    }
  };
  return (
    <ActionBox $current={['pencil', 'light', 'tape', 'eraser'].includes(directive)}>
      <BrushContainer
        $current={['pencil', 'light', 'tape', 'eraser'].includes(directive)}
        $directive={directive}
        className={classnames('brush')}
        onClick={() => {
          !['pencil', 'light', 'tape', 'eraser'].includes(directive) &&
            __EE__.emit('activeTypeChange', 'pencil');
        }}
      >
        <Flex align="center" justify="center">
          {getBrush()}
        </Flex>
      </BrushContainer>
    </ActionBox>
  );
};

export default Brush;

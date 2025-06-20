import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';
import BrushHoldLightSVG from '@/assets/tools-brush-light-hold.svg?react';
import BrushLightSVG from '@/assets/tools-brush-light.svg?react';
import BrushPencilSVG from '@/assets/tools-brush-pencil.svg?react';
import BrushPencilHoldSVG from '@/assets/tools-brush-pencil-hold.svg?react';
import BrushTapeHoldSVG from '@/assets/tools-brush-tape-hold.svg?react';
import BrushTapeSVG from '@/assets/tools-brush-tape.svg?react';
import BrushErazeHoldSVG from '@/assets/tools-brush-eraser-hold.svg?react';
import BrushErazeSVG from '@/assets/tools-brush-eraser.svg?react';
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
`;
const Brush = ({ directive }) => {
  const [currentBrush, setCurrentBrush] = useState('pencil');

  const getBrush = () => {
    switch (currentBrush) {
      case 'pencil':
        return directive === 'brush' ? (
          <BrushPencilHoldSVG width="42" height="136" />
        ) : (
          <BrushPencilSVG width="42" height="136" />
        );
      case 'light':
        return directive === 'brush' ? <BrushHoldLightSVG /> : <BrushLightSVG />;
      case 'tap':
        return directive === 'brush' ? <BrushTapeHoldSVG /> : <BrushTapeSVG />;
      case 'erazer':
        return directive === 'brush' ? <BrushErazeHoldSVG /> : <BrushErazeSVG />;
      default:
        break;
    }
  };
  return (
    <ActionBox $current={directive === 'brush'}>
      <BrushContainer
        $current={directive === 'brush'}
        className={classnames('brush')}
        onClick={() => {
          __EE__.emit('activeTypeChange', 'brush');
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

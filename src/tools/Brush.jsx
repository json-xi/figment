import React, { useState } from 'react';
import styled from 'styled-components';
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
const BrushContainer = styled.div`
  position: relative;
  width: 72px;
  height: 80px;
  /* overflow: hidden; */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    background: white; /* 背景色与容器一致 */
  }
  &.brush:hover {
    background-color: #f5f5f5;
    & svg {
      transition: all 0.2;
      transform: translateY(-26px);
      /* transform: scale(1.1); */
    }
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
    <BrushContainer
      className={classnames('brush')}
      onClick={() => {
        __EE__.emit('activeTypeChange', 'brush');
      }}
    >
      <Flex align="center" justify="center">
        {getBrush()}
      </Flex>
      {/* <SubBrushMenu setCurrentBrush={setCurrentBrush} directive={directive}></SubBrushMenu> */}
    </BrushContainer>
  );
};

export default Brush;

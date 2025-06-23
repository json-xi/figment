import { Flex } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ImageEraserSVG from '@/assets/image-edit-eraser.svg?react';
import ImageCropperSVG from '@/assets/image-edit-cropper.svg?react';
import ImageMirrorXSVG from '@/assets/image-edit-mirror-horizontal.svg?react';
import ImageMirrorYSVG from '@/assets/image-edit-mirror-vertical.svg?react';

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
  & > div {
    height: 48px;
  }
  & svg {
    width: 28px;
    height: 28px;
    cursor: pointer;
  }
`;
const ImageEditMenu = () => {
  return (
    <Container>
      <Flex align="center" justify="space-evenly">
        <ImageEraserSVG
          onClick={() => {
            __EE__.emit('activeTypeChange', 'imageEraser');
          }}
        ></ImageEraserSVG>
        <ImageCropperSVG
          onClick={() => {
            __EE__.emit('activeTypeChange', 'cropper');
          }}
        ></ImageCropperSVG>
        <ImageMirrorXSVG
          onClick={() => {
            __EE__.emit('activeTypeChange', 'mirrorX');
          }}
        ></ImageMirrorXSVG>
        <ImageMirrorYSVG
          onClick={() => {
            __EE__.emit('activeTypeChange', 'mirrorY');
          }}
        ></ImageMirrorYSVG>
      </Flex>
    </Container>
  );
};

export default ImageEditMenu;

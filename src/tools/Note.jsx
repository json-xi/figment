import React from 'react';
import styled, { css } from 'styled-components';
import Note1 from '@/assets/tools-note-1.svg?react';
import Note2 from '@/assets/tools-note-2.svg?react';
import Note3 from '@/assets/tools-note-3.svg?react';
const ActionBox = styled.div`
  width: 116px;
  height: 80px;
  box-sizing: content-box;
  position: relative;
  transition: all 0.2s;
  &:hover {
    background-color: #0000000f;
  }
  &:hover .inner1 {
    top: -20px;
    height: 100px;
  }
  ${(props) =>
    props.$current
      ? css`
          background-color: rgba(0, 0, 0, 0.06);
        `
      : null}
`;

const ActionBoxInner = styled.div`
  position: absolute;
  width: 116px;
  height: 80px;
  overflow: hidden;
`;

const NoteBox = styled.div`
  position: absolute;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.1)) drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.1))
    drop-shadow(0px 0px 0.5px rgba(0, 0, 0, 0.18));
  width: 104px;
  height: 104px;
  top: 16px;
  left: 25px;

  & svg {
    width: 104px;
    height: 104px;
  }

  &.n1 {
    z-index: 3;
    transform: translate(-20px, -20px);
  }

  &.n2 {
    transform: rotate(-7.5deg) translate(-20px, -8px);
    transform-origin: bottom left;
    z-index: 2;
  }
  &.n3 {
    transform: rotate(-15deg) translate(-20px, 4px);
    transform-origin: bottom left;
    z-index: 1;
  }
`;

export default function (props) {
  return (
    <ActionBox $current={props.directive === 'note'}>
      <ActionBoxInner className="inner1">
        <NoteBox className="n1">
          <Note1 />
        </NoteBox>
      </ActionBoxInner>
      <ActionBoxInner>
        <NoteBox className="n2">
          <Note2 />
        </NoteBox>
      </ActionBoxInner>
      <ActionBoxInner>
        <NoteBox className="n3">
          <Note3 />
        </NoteBox>
      </ActionBoxInner>
    </ActionBox>
  );
}

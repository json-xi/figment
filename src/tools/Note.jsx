import React from 'react';
import styled, { css } from 'styled-components';
import Note1 from '@/assets/tools-note-1.svg?react';
import Note2 from '@/assets/tools-note-2.svg?react';
import Note3 from '@/assets/tools-note-3.svg?react';
const NoteContainer = styled.div`
  width: 116px;
  height: 116px;
  position: relative;
  & svg {
    width: 104px;
    height: 104px;
    &:last-child {
    }
  }
  &:hover {
    background-color: #0000000f;
  }
`;
const Note1Wrapper = styled.div`
  z-index: 3;
  position: absolute;
  top: 10px;
  left: 10px;
  /* transform: translateX(20px); */
`;
const Note2Wrapper = styled.div`
  z-index: 2;
  top: 10px;
  left: 10px;
  position: absolute;
  transform: rotate(-7.5deg);
  transform-origin: bottom left;
`;
const Note3Wrapper = styled.div`
  z-index: 1;
  top: 10px;
  left: 10px;
  position: absolute;
  /* transform: translateX(-20px); */
  transform: rotate(-15deg);
  transform-origin: bottom left;
`;
const Note = () => {
  return (
    <NoteContainer>
      <Note3Wrapper>
        <Note3></Note3>
      </Note3Wrapper>
      <Note2Wrapper>
        <Note2></Note2>
      </Note2Wrapper>
      <Note1Wrapper>
        <Note1></Note1>
      </Note1Wrapper>
    </NoteContainer>
  );
};

export default Note;

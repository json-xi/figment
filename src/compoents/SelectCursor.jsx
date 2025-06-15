import React from 'react';
import CursorSVG from '@/assets/tools-selection.svg?react';
import styled from 'styled-components';
import classnames from 'classnames';
const CursorContainer = styled.div`
  border-top-left-radius: 13px;
  height: 40px;
  width: 44px;
  &.current {
    background-color: #9747ff;
    & svg path {
      fill: white;
    }
  }
`;
const SelectHand = (props) => {
  console.log('selection', props);

  return (
    <CursorContainer
      onClick={() => {
        __EE__.emit('activeTypeChange', 'selection');
      }}
      className={classnames({ current: props.directive === 'selection' })}
    >
      <CursorSVG width="44" height="40"></CursorSVG>
    </CursorContainer>
  );
};

export default SelectHand;

import React from 'react';
import HandleSVG from '@/assets/tools-hand.svg?react';
import styled from 'styled-components';
import classNames from 'classnames';
const HandContainer = styled.div`
  border-bottom-left-radius: 13px;
  height: 40px;
  width: 44px;
  pointer-events: auto;
  z-index: 10;
  &.current {
    background-color: #9747ff;
    & svg path {
      fill: white;
    }
  }
`;
const SelectHand = (props) => {
  console.log('hand', props);

  return (
    <HandContainer
      className={classNames({
        current: props.directive === 'hand',
      })}
      onClick={() => {
        __EE__.emit('activeTypeChange', 'hand');
      }}
    >
      <HandleSVG width="44" height="40"></HandleSVG>
    </HandContainer>
  );
};

export default SelectHand;

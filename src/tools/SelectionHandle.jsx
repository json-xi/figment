import React from 'react';
import { Flex } from 'antd';
import SelectHand from '@/components/SelectHand';
import SelectCursor from '@/components/SelectCursor';
import styled from 'styled-components';
const SelectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
const SelectionHandle = (props) => {
  return (
    <Flex vertical>
      <SelectCursor directive={props.directive}></SelectCursor>
      <SelectHand directive={props.directive}></SelectHand>
    </Flex>
  );
};

export default SelectionHandle;

import styled from 'styled-components';
import { Button, Flex } from 'antd';
import SelectionHandle from './SelectionHandle';
import MainAction from './MainAction';
import SplitLine from '@/compoents/SplitLine';

const ToolsBox = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  height: 80px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  pointer-events: auto;
  background: #fff;
  box-sizing: content-box;
  box-shadow: 0 0 0 0.5px #00000033, 0px 0px 0.5px rgba(0, 0, 0, 0.18),
    0px 3px 8px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  transition: all 0.2s;
  z-index: 99;
`;

export default function Tools(props) {
  return (
    <ToolsBox>
      <Flex>
        <SelectionHandle directive={props.directive} />
        <SplitLine></SplitLine>
        <MainAction directive={props.directive}></MainAction>
      </Flex>
    </ToolsBox>
  );
}

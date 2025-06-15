import styled from 'styled-components';
import { Button, Flex } from 'antd';

const ToolsBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function Tools(props) {
  const changeActive = (type) => {
    __EE__.emit('activeTypeChange', type);
  };
  return (
    <ToolsBox>
      <Flex gap="large">
        {/* <Button onClick={() => changeActive('pencil')}>铅笔</Button> */}
        {/* <Button onClick={() => props.onChangeBrush('eraser')}>橡皮</Button> */}
        {/* <Button onClick={() => changeActive('pattern')}> 喷绘</Button>
        <Button onClick={() => props.onChangeBrush('eraser')}>橡皮</Button> */}
      </Flex>
    </ToolsBox>
  );
}

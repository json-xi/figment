import React from 'react';
import { Flex } from 'antd';
import Geometry from './Geometry';
import Note from './Note';
import Brush from './Brush';

const MainAction = (props) => {
  return (
    <Flex>
      <Brush directive={props.directive}></Brush>
      <Note directive={props.directive}></Note>
      <Geometry directive={props.directive}></Geometry>
    </Flex>
  );
};

export default MainAction;

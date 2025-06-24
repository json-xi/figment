import React from 'react';
import Add from '@/assets/tools-add.svg?react';
import styled from 'styled-components';
import { Upload } from 'antd';
const Container = styled.div`
  width: 140px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 100px;
    height: 80px;
    cursor: pointer;
  }
`;
const AddContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 48px;
  & .ant-upload-list {
    display: none;
  }
  & svg {
    width: 40px;
    height: 48px;
  }
`;
const props = {
  name: 'file',
  showUploadList: false,
  beforeUpload: (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        __EE__.emit('_fabric_add_image', e.target.result);
      };
      reader.readAsDataURL(file);
    }
    return false;
  },
};
const ImaeEditor = () => {
  return (
    <Container>
      <img
        onClick={() => {
          __EE__.emit('activeTypeChange', 'imageEdit');
        }}
        src="/src/assets/image (1).png"
      />
      <AddContainer>
        <Upload {...props}>
          <Add />
        </Upload>
      </AddContainer>
    </Container>
  );
};

export default ImaeEditor;

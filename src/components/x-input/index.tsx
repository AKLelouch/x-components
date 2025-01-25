import React from 'react';
import { default as AntDInput, InputProps as AntDInputProps } from 'antd/es/input';

interface InputProps extends AntDInputProps {}

const Input: React.FC<InputProps> = props => {
  const { ...rest } = props;

  return <AntDInput {...rest}></AntDInput>;
};

export default Input;

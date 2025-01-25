import React from 'react';
import { default as AntDButton, ButtonProps as AntDButtonProps } from 'antd/es/button';
import './index.less';

interface ButtonProps extends AntDButtonProps {}

const Button: React.FC<ButtonProps> = props => {
  const { children, ...rest } = props;

  return <AntDButton {...rest}>{children}</AntDButton>;
};

export default Button;

import React from 'react';
import './index.less';

const Button = props => {
  const { children, ...rest } = props;

  return <button {...rest} className='button'>{children}</button>;
};

export default Button;

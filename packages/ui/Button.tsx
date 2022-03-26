import * as React from 'react';
import './css/style.css';

export const Button = ({
  callbackFn,
  title,
  color,
  bgColor,
}: {
  callbackFn: React.EventHandler<any>;
  title: string;
  color: string;
  bgColor: string;
}) => {
  return (
    <button
      className='primary-button'
      title={title}
      onClick={callbackFn}
      style={{ color: color, backgroundColor: bgColor }}
    >
      {title}
    </button>
  );
};

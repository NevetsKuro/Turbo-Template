import * as React from 'react';
import "./css/style.css"

export const Button = ({callbackFn, title}:{callbackFn: React.EventHandler<any> ,title: string}) => {
  return (
    <>
      <button className='primary-button' title={title} onClick={callbackFn}>
        {title}
      </button>
    </>
  );
};

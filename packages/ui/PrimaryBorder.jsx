import * as React from 'react';
import "./css/style.css"

export const CardWrapper = ({children}) => {
  return (
    <div className='primary-border'>
      {children}
    </div>
  );
};

import * as React from 'react';
import './css/style.css';

export const Divider = ({ color, bgColor }: { color: string, bgColor: string }) => {
  return <hr className='divider' style={{ color: color, backgroundColor: bgColor}}  />;
};

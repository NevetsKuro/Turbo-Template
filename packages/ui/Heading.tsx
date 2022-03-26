import * as React from 'react';
import './css/style.css';

export const Heading = ({ title }: { title: string }) => {
  return <h1 className='heading text-center'>{title}</h1>;
};

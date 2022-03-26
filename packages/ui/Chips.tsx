import * as React from 'react';
import './css/style.css';

export const Chips = ({ ingredient }: { ingredient: string }) => {
  return (
    <div className='chips'>
      {ingredient}
    </div>
  );
};

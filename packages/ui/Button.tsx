import * as React from 'react';
export const Button = () => {
  const [msg, setMsg] = React.useState('');
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => {setCount(count+1);setMsg("Don't click me!!")}}>Be-Boop-Bump</button>
      <h1>{msg} x{count}</h1>
    </div>
  );
};

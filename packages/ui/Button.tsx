import * as React from 'react';
export const Button = () => {
  const [msg, setMsg] = React.useState('');
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => {setCount(count+1);setMsg("> Burgers!!")}}>Purchase a single burger 🤤</button>
      {count>0 && <h1>{msg} x{count}</h1>}
    </div>
  );
};

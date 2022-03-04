import * as React from 'react';
export const Button = () => {
  const [msg, setMsg] = React.useState('');
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => {setCount(count+1);setMsg("> One Deluxe Burger")}}>Purchase one burgers boii s🤤</button>
      <br/>
      <br/>
      Burgers Purchased: {count>0 && `${count} Qty.`}
    </div>
  );
};

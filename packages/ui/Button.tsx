import * as React from 'react';
export const Button = () => {
  const [msg, setMsg] = React.useState('');
  return (
    <div>
      <button onClick={() => setMsg("Don't touch me")}>Be-Boop-Bump</button>
      <h1>{msg}</h1>
    </div>
  );
};

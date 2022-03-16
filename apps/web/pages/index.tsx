import React, { useState } from 'react';
import { Button, Divider } from 'ui';

export default function Web() {
  const [orders, setOrders] = useState([]);
  const [count, setCount] = useState(0);
  const menu = [
    {
      name: 'ROASTED BBQ CHICKEN',
      ingredients: ['chilli', 'chicken', 'pepper', 'cheese'],
      price: '200',
    },
    {
      name: 'SMOKY PEPPERONII',
      ingredients: ['pepper', 'cheese', 'pork', 'garlic'],
      price: '400',
    },
    {
      name: 'MEAT EATER',
      ingredients: ['chicken', 'cheese', 'salami', 'sausage', 'pork', 'onions'],
      price: '400',
    },
    {
      name: 'COKE',
      ingredients: [],
      price: '100',
    },
  ];
  const buyPizza = (prevOrders, pizza) => {
    console.log('new Orders', pizza);
    let temp = prevOrders || [];
    const flag = temp.some((x) => x.name == pizza.name);
    setCount(count + 1);
    if (!flag) {
      console.log('New pizza');
      temp.push({
        name: pizza.name,
        quantity: 1,
        price: pizza.price,
      });
    } else {
      console.log('Add extra pizza');
      temp.forEach((x) => {
        if (x.name == pizza.name) {
          x.quantity += 1;
        }
      });
    }
    setOrders(temp);
    console.log(temp);
  };
  const getTotal = (preOrders) => {
    let totalCost = 0;
    preOrders.forEach((order) => {
      totalCost += order.quantity * order.price;
    });
    return totalCost;
  };
  const resetOrder = () => {
    setOrders([]);
  };
  const submitOrder = () => {
    alert('Order placed!!');
  };
  return (
    <div className='container'>
      <h1>Pizza Ordering System:</h1>

      <div className='system-container'>
        <table className='menu-table'>
          <h4>Menu</h4>
          <tbody>
            {menu.map((pizza, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      {pizza.name}
                      <br />
                      {pizza.ingredients.map((ingredient) => (
                        <div key={ingredient} className='chips'>
                          {ingredient}
                        </div>
                      ))}
                    </td>
                    <td>
                      <Button
                        title={'+'}
                        callbackFn={() => buyPizza(orders, pizza)}
                      />
                    </td>
                  </tr>
                  {menu.length - 1 != index && (
                    <tr>
                      <td colSpan={2}>
                        <Divider color='white' bgColor='azure' />
                      </td>
                    </tr>
                  )}
                </>
              );
            })}
          </tbody>
        </table>
        <div className='orders-table'>
          <h4>
            &nbsp;&nbsp;&nbsp;&nbsp;Orders: (<i>Items: {count || 0}</i>)
          </h4>
          <div className='orders'>
            {orders.length > 0 ?
              orders.map((order, index) => (
                <div key={index} className='display-orders'>
                  <div style={{ width: '60%' }}>{order.name}</div>
                  <div>{order.quantity} Qty.</div>
                  <div>${order.price}</div>
                </div>
              )):
              <p className='display-orders'>Hungry? Have some pizza!.</p>}
            <Divider color='white' bgColor='azure' />
            <div className='display-orders'>
              <br />
              <div>Total:</div>
              <div>${getTotal(orders)}</div>
            </div>
          </div>
          <div className='display-orders'>
            <Button title='Reset' callbackFn={() => resetOrder()} />
            <Button title='Submit' callbackFn={() => submitOrder()} />
          </div>
        </div>
      </div>
    </div>
  );
}

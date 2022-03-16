import React, { useState } from 'react';
import { Button } from 'ui';

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
      ingredients: [
        'chicken',
        'cheese',
        'salami',
        'sausage',
        'pork',
        'onions',
        '',
      ],
      price: '400',
    },
  ];
  const buyPizza = (prevOrders, pizza) => {
    console.log("new Orders", pizza);
    let temp = prevOrders || [];
    const flag = temp.some((x) => x.name == pizza.name);
    setCount(count+1)
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
    let totalCost = 0
    preOrders.forEach(order=>{
      totalCost += order.quantity * order.price
    })
    return totalCost
  }
  return (
    <div className='container'>
      <h1>Pizza Ordering System:</h1>
      <br />
      <em>Place your order below from the below menu</em>
      <table className='menu-table'>
        <tbody>
          {menu.map((pizza, index) => {
            return (
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
                  <Button title={'Buy'} callbackFn={() => buyPizza(orders, pizza)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <h2>Orders: (<i>Items: {count || 0}</i>)</h2>
        <div>
          {orders.length > 0 && orders.map((order, index) => (
            <div key={index} className="display-orders">
              <div>
                {order.name}
                <br /> <em>price: {order.price}</em>
              </div>
              <div>{order.quantity}</div>
            </div>
          ))}
          <div className='display-orders'>
            <div>Total:</div>
            <div>{getTotal(orders)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

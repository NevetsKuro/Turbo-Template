import Head from 'next/head';
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
      name: 'HOT WINGS',
      ingredients: ['mexican spice', 'chicken'],
      price: '120',
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
    alert('Order placed!! \n Bill Amount: $' + getTotal(orders));
  };
  return (
    <div>
      <Head>
        <title>Web: Ordering System</title>
      </Head>
      <div className='system-container'>
        <div className='menu-table'>
          <h1 className='text-center'>Pizza Ordering System</h1>
          <br/>
          <h3 className='underline'> Order from Menu</h3>
          <table className='borders'>
            <tbody>
              {menu.map((pizza, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr>
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
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='w-1/2'>
          <div className='orders-table'>
            <h3>
              &nbsp;&nbsp;&nbsp;&nbsp;Orders: (<i>Items: {count || 0}</i>)
            </h3>
            <div className='orders'>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <div key={index} className='display-orders'>
                    <div style={{ width: '60%' }}>{order.name}</div>
                    <div>{order.quantity} Qty.</div>
                    <div>${order.price}</div>
                  </div>
                ))
              ) : (
                <p className='display-orders'>Hungry? Add some pizza to your tummy!.</p>
              )}
              <Divider color='white' bgColor='azure' />
              <div className='display-orders'>
                <br />
                <div>Total: ${getTotal(orders)}</div>
              </div>
            </div>
            <div className='display-orders'>
              <Button title='Reset' callbackFn={() => resetOrder()} />
              <Button title='Submit' callbackFn={() => submitOrder()} />
            </div>
          </div>
          <p>{process.env.NEXT_PUBLIC_MESSAGE}</p>
        </div>
      </div>
    </div>
  );
}

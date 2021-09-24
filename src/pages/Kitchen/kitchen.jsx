import React, { useState, useEffect } from 'react';
import './kitchen.css';
import Header from '../../components/HeaderKitchen/headersKitchen';
import OrdersArea from '../../components/OrdersArea/ordersArea';
import OrdersKitchen from '../../components/OrdersKitchen/ordersKitchen';
import OrdersProducts from '../../components/OrdersProducts/ordersProducts';

function Kitchen() {
  const [orders, setOrders] = useState([]);

  const token = localStorage.getItem('token');
  const requestAllOrders = () => {
    fetch('https://lab-api-bq.herokuapp.com/orders', {
      headers: {
        accept: 'application/json',
        Authorization: `${token}`,

      },

    })
      .then((response) => response.json())
      .then((json) => {
        const allOrders = json.filter((item) => item.status === 'processing' || item.status === 'pending');
        setOrders(allOrders);
      });
  };

  useEffect(() => {
    requestAllOrders();
  }, []);

  return (
    <>
      <Header />
      <div className="container-kitchen">
        <h1>Pedidos</h1>
        <OrdersArea>
          {orders.map((item) => (
            <OrdersKitchen
              key={item.id}
              table={item.table}
              client_name={item.client_name}
            >
              {item.Products.map((prod) => (
                <OrdersProducts
                  name={prod.name}
                  flavour={prod.flavour}
                  complement={prod.complement}
                  qtd={prod.qtd}
                />
              ))}
            </OrdersKitchen>
          ))}
        </OrdersArea>

      </div>

    </>

  );
}

export default Kitchen;

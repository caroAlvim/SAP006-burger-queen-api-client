/* eslint-disable camelcase */
import React from 'react';
import './ordersKitchen.css';

function OrdersKitchen({
  id,
  client_name,
  table,
  createdAt,
  updatedAt,
  children,
}) {
  return (
    <>
      <section className="order-container" key={id}>
        <div className="header-orders">
          <h2> Mesa: {table}</h2>
          <h2> cliente: {client_name}</h2>
        </div>
        <aside className="orders-time">
          <p>Pedido feito às {createdAt} </p>
          <p>Atualizado às {updatedAt} </p>
        </aside>
        <div className="list-orders">
          {children}
        </div>
      </section>
    </>
  );
}

export default OrdersKitchen;

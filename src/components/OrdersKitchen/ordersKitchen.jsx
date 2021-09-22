import React from 'react';
import './ordersKitchen.css';

function OrdersKitchen({
  id,
  client,
  table,
  name,
  flavor,
  complement,
  qtd,
}) {
  return (
    <>
      <section className="order-container" key={id}>
        <div className="header-orders">
          <h2> Mesa: {table}</h2>
          <h2> cliente: {client}</h2>
        </div>
        <div className="list-orders">
          <p>{name}</p>
          <p>{flavor}</p>
          <p>{complement}</p>
          <p>{qtd}</p>
        </div>
      </section>
    </>
  );
}

export default OrdersKitchen;

// {
//     "id": 2109,
//     "client_name": "ana",
//     "user_id": 2117,
//     "table": 1,
//     "status": "pending",
//     "processedAt": null,
//     "createdAt": "2021-09-17T05:01:09.132Z",
//     "updatedAt": "2021-09-17T05:01:09.132Z",
//     "Products": [
//       {
//         "id": 29,
//         "name": "Café americano",
//         "flavor": null,
//         "complement": null,
//         "qtd": 1
//       }]
// }

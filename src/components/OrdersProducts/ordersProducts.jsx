import React from 'react';

function OrdersProducts({
  name,
  flavour,
  complement,
  qtd,
  id,
}) {
  return (
    <div key={id}>
      <span>{qtd} </span>
      <span>{name} </span>
      <span>{flavour} </span>
      <span>{complement} </span>
    </div>
  );
}

export default OrdersProducts;

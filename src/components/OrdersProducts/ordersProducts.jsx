import React from 'react';
// import styled from 'styled-components';

// const Prod = styled.div`
// display: flex;
// padding: 0.5rem;
// flex-direction: column;
// align-content: center;
// align-items: center;
// font-family: 'Montserrat', sans-serif;
// }
// `;

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

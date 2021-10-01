import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';

const Delivered = styled.section`
width: 100%;
padding: 5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Bob;
font-size: 16px;

@media (min-width: 1440px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}
`;

function OrdersDeliverd() {
  return (
    <>
      <Header />
      <Delivered>
        <h2> Soon... </h2>
      </Delivered>
    </>
  );
}

export default OrdersDeliverd;

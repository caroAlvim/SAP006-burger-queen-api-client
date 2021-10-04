import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
padding: 1rem;
display: grid;
grid-template-columns: 1fr 1fr;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Bob;
margin-top: -6rem;

@media (min-width: 1440px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}

@media (min-width: 1660px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
`;

const Header = styled.div`
font-family: Bob;
font-size: 26px;
display: flex;
justify-content: center;
`;

function OrdersArea({ msg, children }) {
  return (
    <>
      <Header> {msg} </Header>
      <Section>
        {children}
      </Section>
    </>
  );
}

export default OrdersArea;

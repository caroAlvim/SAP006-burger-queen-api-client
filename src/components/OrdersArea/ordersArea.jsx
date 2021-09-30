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

@media (min-width: 1440px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

}
`;

function OrdersArea({ children }) {
  return (
    <Section>
      {children}
    </Section>
  );
}

export default OrdersArea;

import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
padding: 1rem;
display: flex;
justify-content: center;
font-family: Bob;
`;

function OrdersArea({ children }) {
  return (
    <Section>
      {children}
    </Section>
  );
}

export default OrdersArea;

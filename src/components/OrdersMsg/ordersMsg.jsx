import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
`;

const Title = styled.div`
font-family: Bob;
font-size: 20px;
`;

const Img = styled.img`
width: 27rem;
`;

function OrdersMsg({
  img,
  children,
}) {
  return (
    <>
      <Section>
        <Title>
          <h2> Sem pedidos no momento!</h2>
        </Title>
        <div className="msg-body">
          {children}
        </div>
        <Img src={img} alt="Spongebob-message" />
      </Section>
    </>
  );
}

export default OrdersMsg;

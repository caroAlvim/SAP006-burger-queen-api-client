import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.section`
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(0, 0, 0, .5);
padding: 15px;
font-family: Bob;
`;

const Content = styled.div`
background-color: #faf6f3;
border-radius: 1rem;
width: 34rem;
margin: 15rem auto 0 auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem;
`;

const portalRoot = document.getElementById('portal-root');

function ModalMsg({
  msg, children, isOpen, onclick,
}) {
  if (!isOpen) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <Overlay>
        <Content>
          <h2>{msg}</h2>
          {children}
          {onclick}
        </Content>
      </Overlay>
    </>,
    portalRoot,

  );
}

export default ModalMsg;

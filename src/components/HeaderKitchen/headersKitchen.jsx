import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/button';
import window from '../../img/window.png';

const Header = styled.section`
width: 100%;
padding: 1rem;
display: flex;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
font-family: Bob;
`;

function Headerkitchen() {
  const historylogOut = useHistory();

  const logOut = () => {
    localStorage.clear();
    historylogOut.push('/');
  };

  return (
    <Header>
      <h1> Cozinha Krusty Krab </h1>
      <div className="btn-div">
        <Button buttonOnClick={logOut} buttonClass="logOut-btn">
          <img className="window-img" src={window} alt="Janela de navio" />
          <p className="txt-logOut">Sair</p>
        </Button>
      </div>

    </Header>

  );
}

export default Headerkitchen;

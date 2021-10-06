import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button/button';
import window from '../../img/window.png';
import krabby from '../../img/hamburguer.png';

const Header = styled.section`
width: 100%;
padding: 1rem;
display: grid;
grid-template-columns: 1fr 3fr 1fr;
justify-content: center;
align-content: center;
align-items: center;
font-family: Bob;
height: 25vh;
background-color: #faf6f3;
`;

const Img = styled.img`
width: 10rem;
border-radius: 50%;
margin: 2rem;
`;

function Headerkitchen() {
  const historylogOut = useHistory();

  const logOut = () => {
    localStorage.clear();
    historylogOut.push('/');
  };

  return (
    <Header>
      <Img src={krabby} alt="burguer" />
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

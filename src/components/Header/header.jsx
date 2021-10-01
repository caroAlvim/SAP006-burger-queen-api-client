import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../img/logo-img.png';
import Button from '../Button/button';
import './header.css';

function Header() {
  const ordersHistory = useHistory();

  const ordersDone = () => {
    ordersHistory.push('/orders-done');
  };
  const ordersDelivered = () => {
    ordersHistory.push('/orders-delivered');
  };

  return (
    <>
      <header>

        <div className="logo-login">
          <img className="logo-img" src={Logo} alt="Logo The Krusty Krab" />
        </div>
        <div className="bubble-1 bubble-container anim bubble-animation-x">
          <div className="bubble bubble-animation-y" />
        </div>

        <div className="bubble-2 bubble-container anim bubble-animation-x">
          <div className="bubble bubble-animation-y" />
        </div>

        <div className="bubble-3 bubble-container anim bubble-animation-x">
          <div className="bubble bubble-animation-y" />
        </div>

        <div className="bubble-4 bubble-container anim bubble-animation-x">
          <div className="bubble bubble-animation-y" />
        </div>

        <div className="bubble-5 bubble-container anim bubble-animation-x">
          <div className="bubble bubble-animation-y" />
        </div>

        <div className="nav-orders">
          <Button
            buttonClass="nav-btn"
            buttonOnClick={ordersDone}
          >
            Pedidos Prontos
          </Button>
          <Button
            buttonClass="nav-btn"
            buttonOnClick={ordersDelivered}
          >
            Pedidos Entregues
          </Button>
        </div>

      </header>

    </>
  );
}

export default Header;

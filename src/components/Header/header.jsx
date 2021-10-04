import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../img/logo-img.png';
import Ocean from '../../img/3.png';
import OceanFlower from '../../img/2.png';
import OceanFlo from '../../img/1.png';
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
          <img className="logo-header" src={Logo} alt="Logo The Krusty Krab" />
          <img className="ocean-img" src={Ocean} alt="ocean-flower" />
          <img className="ocean-img-flo" src={OceanFlower} alt="ocean-flower" />
          <img className="ocean-img-flow" src={OceanFlo} alt="ocean-flower" />
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

import React from 'react';
import { useHistory } from 'react-router-dom';
import Mesa from '../../components/Table/mesa';
import Header from '../../components/Header/header';
import Button from '../../components/Button/button';
import logout from '../../img/Logout.png';
import './saloon.css';

function Saloon() {
  const historylogOut = useHistory();

  const logOut = () => {
    localStorage.clear();
    historylogOut.push('/');
  };

  const mesasTotal = 6;
  const mesas = [];
  const role = localStorage.getItem('role');
  console.log(role);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < mesasTotal; i++) {
    mesas.push(`${[i + 1]}`);
  }

  return (
    (role !== 'cozinha' ? (

      <div className="container">
        <Header />
        <main>
          <div className="table">
            <p className="title-table">Escolha a mesa para realizar o pedido</p>
            {mesas.map((mesa) => (
              <Mesa
                mesa={mesa}
              />
            ))}

          </div>
          <div className="logout-div">
            <Button buttonClass="logout-btn" buttonOnClick={logOut}>
              <img className="logout-img" src={logout} alt="Sair" />
              {/* <p className="net-logout">Sair</p> */}
            </Button>
          </div>
        </main>

      </div>

    ) : (

      <div className="container">
        <Header />
        <main>
          <p className="title-table">Você não pertence a esse lugar</p>

        </main>

      </div>

    )
    )

  );
}

export default Saloon;

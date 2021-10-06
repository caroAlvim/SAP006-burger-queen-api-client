/* eslint-disable*/
import React from 'react';
// import '../Table/table.css';
import Mesa from '../../components/Table/mesa';
import Header from '../../components/Header/header';
import './saloon.css';

// import Mesa from '../../components/mesa';
// import Header from '../../components/header';
// import Logo from '../../img/logo-img.png';

function Saloon() {
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
  <p className="title-table">Escolha a mesa para realizar o pedido</p>

  <div className="table">
    {mesas.map((mesa) => (
      <Mesa
        mesa={mesa}
      />
    ))}

  </div>
</main>

</div>
  
    ) : (
     

<div className="container">
<Header />
<main>
  <p className="title-table">VOCE NAO PERTENCE A ESSE LUGAR</p>

</main>

</div>
  
    )
    )
    
  );

 
}


export default Saloon;

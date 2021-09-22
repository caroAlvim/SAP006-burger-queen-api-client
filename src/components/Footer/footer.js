import React from 'react';
import Burguer from '../../img/hamburguer.png';

function Footer() {
  return (
    <footer>
      <span> Desenvolvido com <img className="burguer-img" src={Burguer} alt="little-hamburguer" /> por <strong> Carol Alvim </strong>  e <strong> Julli Mayanne </strong>

      </span>
    </footer>
  );
}

export default Footer;

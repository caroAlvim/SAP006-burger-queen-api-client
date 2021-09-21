/*eslint-disable */
import './index.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../../components/Header/header';
import Item from '../../../components/Item/itens';
import Button from '../../../components/Button/button';
import { useHistory } from 'react-router-dom';
import Panel from '../../../components/Menu/menu';

function AllDay() {
useEffect(()=> {
  getAllDay();
}, []);

const token = localStorage.getItem('token')
 const getAllDay = () => {
   fetch('https://lab-api-bq.herokuapp.com/products', {
     headers: {
       accept: 'application/json',
       Authorization: `${token}`
     },
   })
   .then((response) => response.json())
   .then((json) =>{
     const simpleburguer = json.filter((item) => item.name === 'Hambúrguer simples');
     console.log(simpleburguer)
     const doubleburguer = json.filter((item) => item.name === 'Hambúrguer duplo')
     console.log(doubleburguer)
   })
 }
 return(
   <>
   <Panel>
     <div>asdasd</div>
     <h1>asdasdasd</h1>
    <Button> Hamburger Simples</Button>
     <Button> Bebidas</Button>
     <Button> Hamburger Duplo</Button>

   </Panel>
   <div className="menu-allday">
     <h1>oioioi</h1>
     <Button> Hamburger Simples</Button>
     <Button> Bebidas</Button>
     <Button> Hamburger Duplo</Button>

     
   </div>
   
    <div className="resumo-pedido">
       <h1>resumo</h1>
     </div>
     
     </>
 )


 
}

export default AllDay;

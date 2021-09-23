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
const history = useHistory();
const {mesa} = useParams();
const simpleBurguerRouter = () => {
history.push('/Simpleburguers')
}
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
     const extras = json.filter((item) => item.name === 'Batata frita')
   })
 }
 return(
   <>
   <Panel>
    <Button buttonClass="menu-choice-button"
    buttonOnClick={(e) => simpleBurguerRouter(e)
    }
    
    > Hamburger Simples
    
    </Button>

    
     <Button buttonClass="menu-choice-button"> Bebidas</Button>
     <Button buttonClass="menu-choice-button"> Hamburger Duplo</Button>
     <Button buttonClass="menu-choice-button"> Hamburger Duplo</Button>

   </Panel>
   
    <div className="resumo-pedido">
       <h1>resumo</h1>
     </div>
     
     </>
 )


 
}

export default AllDay;

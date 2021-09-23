/*eslint-disable */
import './index.css';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../../components/Header/header';
import Item from '../../../components/Item/itens';
import Button from '../../../components/Button/button';
import Input from '../../../components/Input/inputTxt';

import Panel from '../../../components/Menu/menu';

function AllDay() {
  useEffect(() => {
    getAllDay();
  }, []);

  const {mesa} = useParams();
  const [fazerPedido, setFazerPedido] = useState({client: '', table: 1, products: []})

  const [resumopedido, setResumoPedido] = useState([]);
  const [menu, setMenu] = useState('');

  const history = useHistory();

  const simpleBurguerRouter = () => {
    history.push('/simpleBurguers');
  };
  const token = localStorage.getItem('token');
  const getAllDay = () => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        accept: 'application/json',
        Authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const simpleburguer = json.filter((item) => item.name === 'Hambúrguer simples');
        setMenu(simpleburguer);
      });
  };
  return (
    <>
      <main className="simple-burguer-menu">
        <Panel>
          <div className="container-itens-simple">
            {menu && menu.map((item, index) => (
              <Item

                divClassName="container-food"
                ImgSrc={item.image}
                itemName={item.name}
                itemFlavor={item.flavor}
                itemComplement={item.complement}
                itemPrice={item.price}
                divKey={Math.random()}
                qnt={item.qnt}
                divOnClick={() => {
                  if (!resumopedido.some((item) => item.id === menu[index].id)) {
                    setResumoPedido([...resumopedido, {
                      name: menu[index].name,
                      flavor: menu[index].flavor,
                      price: menu[index].price,
                      qnt: 1,
                    }]);
                  } else {
                    resumopedido.map((item, i) => {
                      if (item.name === menu[index].name) {
                        resumopedido[i].qnt++
                + setResumoPedido([...resumopedido]);
                      }
                    });
                  }
                }}
              />
            ))}

            <Button buttonClass="back-menu-button">Voltar</Button>

          </div>
        </Panel>
        <Panel>
        <section className="finish-burguer-menu">
            <h1>Resumo do Pedido</h1>
            <p>Mesa </p>
            <Input
        className="nome-cliente"
        type="text"
        placeholder="Digite o nome do cliente"
        onChange={(event) => setFazerPedido({...fazerPedido, client: event.target})}
        />
    <section>
        <label className="item-simple">Item</label>
        {resumopedido.map((item, index) => (
            <ui className="lista-resumo-pedido">
                <li className="list" key={index}>
                    <div className="pedido-name">
                    {typeof item.name ==='string' ? item.name : item.name.map((item) => (
                        <>
                        <lable className="title">{item.name}</lable>
                    
                        </>
                    ))}
                       {typeof item.flavor ==='string' ? item.flavor : item.flavor.map((item) => (
                        <>
                        <lable className="title">{item.flavor}</lable>
                    
                        </>
                    ))}
                    

                    </div>
                </li>




            </ui>
        ))}
    </section>




            </section>

      
            </Panel>
  

      </main>

    </>
  );
}

export default AllDay;

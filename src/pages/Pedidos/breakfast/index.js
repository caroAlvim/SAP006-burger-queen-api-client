/* eslint-disable */
import './index.css';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Header from '../../../components/Header/header';
import Item from '../../../components/Item/itens';
import Button from '../../../components/Button/button';
import Panel from '../../../components/Menu/menu';
import Carne from '../../../img/carne.png';
import Frango from '../../../img/frango2.png';
import Veg from '../../../img/veg.png';
import Queijo from '../../../img/ovo.png';
import Ovo from '../../../img/queijo.png';
// import Trash from '../../../img/trash.png';

function Pedidos() {
  const { mesa } = useParams();

  const history = useHistory();

  function somaFinal(array) {
    return array.reduce((total, item) => total + (item.qtd * item.price), 0);
  }

  const [menus, setMenus] = useState(true);
  const [selectedBurger, setSelectedBurger] = useState({
    name: null,
    flavor: null,
    complement: null,
  });

  const [menuAlmoco, setMenuAlmoco] = useState([]);
  const [menuCafe, setMenuCafe] = useState([]);
  const [resumopedido, setResumoPedido] = useState([]);
  const [fazerPedido, setFazerPedido] = useState({ client: '', table: mesa, products: [] });
  const [erroMessage, setErroMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const hamburguers = [{ name: 'carne', label: 'carne', img: Carne }, { name: 'frango', label: 'frango', img: Frango }, { name: 'vegetariano', label: 'vegetariano', img: Veg }];
  const adicionais = [{ name: 'ovo', img: Ovo }, { name: 'queijo', img: Queijo }];
  const [openExtrasBurgerSimples, setOpenExtrasBurgerSimples] = useState(false);
  const [openExtrasBurgerDuplo, setOpenExtrasBurgerDuplo] = useState(false);
  const [extrasBurgerSimples, setExtrasBurgerSimples] = useState('');
  const [extrasBurgerDuplo, setExtrasBurgerDuplo] = useState('');
  const [listaCompletaDeProdutos, setListaCompletaDeProdutos] = useState('');
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const getAllProducts = () => {
    fetch('https://lab-api-bq.herokuapp.com/products', {
      headers: {
        accept: 'application/json',
        Authorization: `${token}`,
      },

    })
      .then((response) => response.json())
      .then((json) => {
        const breakfast = json.filter((item) => item.type === 'breakfast');
        setMenuCafe(breakfast);
        const allDayMenu = json.filter((item) => item.type === 'all-day');

        const allDaySlice = allDayMenu.slice(18, 24);
        const AllDayBurger = allDayMenu.slice(8, 10);
        const burguerAndAll = AllDayBurger.concat(allDaySlice);

        setMenuAlmoco(burguerAndAll);
        const allproducts = json;
        setListaCompletaDeProdutos(allproducts);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <main className="all-container">
      <Header />
      <div className="">

        {menus ? (
          <Panel>
            <section>
              <Button
                buttonClass="menu-button"
                buttonOnClick={() => {
                }}
              >Café da Manhã
              </Button>
              <Button
                buttonClass="menu-button"
                buttonOnClick={() => {
                  setMenus(false);
                }}
              >All Day
              </Button>

            </section>
            <div className="breakfast-menu">
              {menuCafe && menuCafe.map((item, index) => (
                <Item
                  divClassName="container-food"
                  divKey={Math.random()}
                  itemName={item.name}
                  ImgSrc={item.image}
                  itemPrice={item.price}
                  qnt={item.qnt}
                  itemNameKey={item.id}
                  divOnClick={() => {
                    if (!resumopedido.some((item) => item.name === menuCafe[index].name)) {
                      setResumoPedido([...resumopedido, {
                        id: menuCafe[index].id,
                        name: menuCafe[index].name,
                        price: menuCafe[index].price,
                        qtd: 1,
                      }]);
                    } else {
                      resumopedido.map((item, i) => {
                        if (item.name === menuCafe[index].name) {
                          resumopedido[i].qnt++
                    + setResumoPedido([...resumopedido]);
                        }
                      });
                    }
                  }}
                />

              ))}

            </div>

          </Panel>

        ) : (
          <Panel>
            <section>
              <Button
                buttonClass="menu-button"
                buttonOnClick={() => {
                  setMenus(true);
                }}
              >Café da Manhã
              </Button>
              <Button
                buttonClass="menu-button"
                buttonOnClick={() => {
                  setMenus(false);
                }}
              >All Day
              </Button>

            </section>
            <div className="all-day-menu">
              <ul className="lista-menu-dois">
                {menuAlmoco.map((item, index) => (
                  <li key={index} className="container-food">
                    <img className="img-food" src={item.image} />
                    <label className="label-all-day-food">{`${item.name} ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}`}</label>
                    <input
                      className="add-button"
                      value="Add"
                      id={item.name}
                      ImgSrc={item.image}
                      type="button"
                      name={item.id}
                      onClick={(event) => {
                        handleExtras(event);
                        if (item.name === 'Hambúrguer simples' || item.name === 'Hambúrguer duplo') {
                          selectedBurger.name = menuAlmoco[index].name;
                          setSelectedBurger({ ...selectedBurger });
                        } else if (!resumopedido.some((pedido) => pedido.name === menuAlmoco[index].name)) {
                          setResumoPedido([...resumopedido, {
                            id: menuAlmoco[index].id, name: menuAlmoco[index].name, price: menuAlmoco[index].price, qtd: 1,
                          }]);
                        } else {
                          resumopedido.map((item, i) => {
                            if (item.name === menuAlmoco[index].name) {
                              resumopedido[i].qtd++;
                              setResumoPedido([...resumopedido]);
                            }
                          });
                        }
                      }}

                    />

                    {openExtrasBurgerSimples === true && item.name === 'Hambúrguer simples' && <section className="menu-extras">{extrasBurgerSimples}</section>}
                    {openExtrasBurgerDuplo === true && item.name === 'Hambúrguer duplo' && <section className="menu-extras">{extrasBurgerDuplo}</section>}

                  </li>
                ))}
              </ul>

            </div>
          </Panel>

        )}

      </div>
      <div className="finish-menu">
        <div className="top-resume">
          <h1>Resumo do Pedido</h1>
          <p> Mesa {mesa}</p>
          <input
            className="nome-cliente"
            type="text"
            placeholder="Digite o nome do cliente"
            onChange={(event) => setFazerPedido({ ...fazerPedido, client: event.target.value })}
          />
        </div>

        <section className="resume-orders-section">
          <label className="item"> Item </label>
          {resumopedido.map((item, index) => (
            <ui className="lista-resumo-pedido">
              <li className="list" key={index}>
                <div className="pedido-name">
                  {typeof item.name === 'string' ? item.name : item.name.map((item) => (
                    <>
                      <label className="title-pedido"> { item.name } </label>
                      <label className="title-pedido"> { item.flavor } </label>
                      <label className="title-pedido"> { item.complement } </label>

                    </>
                  ))}

                  <label className="prices">
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price)}
                  </label>

                  <input
                    className="qtd-button"
                    id="menos-qtd"
                    type="button"
                    value="-"
                    onClick={() => {
                      if (item.qtd > 1 && item.name === resumopedido[index].name) {
                        resumopedido[index].qtd--;
                        setResumoPedido([...resumopedido]);
                      } else if (item.name === resumopedido[index].name && item.atd === 1) {
                        resumopedido.splice(index, 1);
                        setResumoPedido([...resumopedido]);
                      }
                    }}
                  />
                  <label>{item.qtd}</label>
                  <input
                    className="qtd-button"
                    id="mais-qtd"
                    type="button"
                    value="+"
                    onClick={() => {
                      if (item.name === resumopedido[index].name) {
                        resumopedido[index].qtd++;
                        setResumoPedido([...resumopedido]);
                      }
                    }}
                  />
                  <input
                    value="Excluir"
                    className="button-excluir-item"
                    id="excluir-item"
                    type="button"
                    onClick={() => {
                      resumopedido.splice(index, 1);
                      setResumoPedido([...resumopedido]);
                    }}

                  />

                </div>
              </li>
            </ui>
          ))}
        </section>

        <section className="payment-order">
          <div className="cash-register">
            <p className="total-pedido">TOTAL:{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(somaFinal(resumopedido))}</p>
          </div>
          <div>
            <input
              className="button-finish"
              type="button"
              value="Finalizar Pedido"
              onClick={() => {
                if (fazerPedido.client !== '') {
                  const products = resumopedido.map((item) => ({ id: item.id, qtd: item.qtd }));
                  fazerPedido.products = products;
                  const clientNameInput = document.querySelector('.nome-cliente').value;

                  const requestOptions = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      accept: 'application/json',
                      Authorization: `${token}`,
                    },
                    body: JSON.stringify({
                      client: clientNameInput,
                      table: mesa,
                      products:
                  resumopedido.map((item) => (
                    {
                      id: Number(item.id),
                      qtd: Number(item.qtd),
                    }
                  )),
                    }),
                  };

                  fetch('https://lab-api-bq.herokuapp.com/orders', requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.id !== undefined) {
                        setErroMessage('Pedido enviado com sucesso');
                        setShowError(true);
                        setFazerPedido({ client: '', table: mesa, products: [] });
                        console.log('foi');
                      } else {
                        setShowError(true);
                        setErroMessage('`${json.message}`');
                        console.log('oh noo');
                      }
                    });
                } else {
                  setShowError(true);
                  setErroMessage('Nome do Cliente nao está');
                }
              }}
            />
          </div>
        </section>

      </div>

    </main>
  );

  function extras() {
    return (
      <>
        <div className="escolhas-extras">
          <section className="opcoes-burguer">
            <p className="titulo-extras">Hambúrguer</p>
            <section className="img-input-extras">
              {hamburguers.map((tipoHamburguer) => (
                <>
                  <input
                    key={tipoHamburguer.name}
                    type="radio"
                    className="choice-burguer"
                    name="escolher-hamburguer"
                    id={tipoHamburguer.name}
                    onClick={(event) => {
                      selectedBurger.flavor = event.currentTarget.id;
                      setSelectedBurger({ ...selectedBurger });
                    }}
                  />
                  <label className="label-input-menu" htmlFor={tipoHamburguer.name}>
                    <img className="img-button-extra" alt={tipoHamburguer.name} src={tipoHamburguer.img} />

                    {tipoHamburguer.label}
                  </label>
                </>
              ))}
            </section>
          </section>
          <section className="opcoes-adicionais">
            <p className="titulo-extras">Adicionais R$1</p>
            <section className="img-input-extras">
              {adicionais.map((tipoAdicional, index) => (
                <>
                  <input
                    key={index}
                    type="radio"
                    name="escolher-adicional"
                    id={tipoAdicional.name}
                    onChange={(event) => {
                      selectedBurger.complement = event.currentTarget.id;
                      setSelectedBurger({ ...selectedBurger });
                    }}
                  />
                  <label htmlFor={tipoAdicional.name} key={index}>
                    <img className="img-button-extra" alt={tipoAdicional.name} src={tipoAdicional.img} />
                    {tipoAdicional.name}
                  </label>
                </>
              ))}
            </section>
          </section>
        </div>

        <input
          className="button-ok-extras"
          type="button"
          value="OK"
          onClick={() => {
            if (selectedBurger.flavor !== null) {
              listaCompletaDeProdutos.filter((produto) => {
                if (produto.name === selectedBurger.name && produto.flavor === selectedBurger.flavor && produto.complement === selectedBurger.complement) {
                  setResumoPedido([...resumopedido, {
                    id: produto.id, name: [{ name: produto.name, flavor: produto.flavor, complement: produto.complement }], price: produto.price, qtd: 1,
                  }]);
                }
                return resumopedido;
              });
              setOpenExtrasBurgerSimples(false);
              setOpenExtrasBurgerDuplo(false);
              setSelectedBurger({
                name: null,
                flavor: null,
                complement: null,
              });
            } else {
              console.log('Você precisa escolher qual o hambúrguer!');
            }
          }}
        />
      </>
    );
  }

  function handleExtras(event) {
    if (event.target.id === 'Hambúrguer simples') {
      if (openExtrasBurgerSimples === true) {
        setOpenExtrasBurgerSimples(false);
      } else {
        setExtrasBurgerSimples(extras());
        setOpenExtrasBurgerSimples(true);
      }
    }
    if (event.target.id === 'Hambúrguer duplo') {
      if (openExtrasBurgerDuplo === true) {
        setOpenExtrasBurgerDuplo(false);
      } else {
        setExtrasBurgerDuplo(extras());
        setOpenExtrasBurgerDuplo(true);
      }
    }
  }
}

export default Pedidos;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import OrdersArea from '../../components/OrdersArea/ordersArea';
import OrdersKitchen from '../../components/OrdersKitchen/ordersKitchen';
import OrdersProducts from '../../components/OrdersProducts/ordersProducts';
import Button from '../../components/Button/button';
import OrdersMsg from '../../components/OrdersMsg/ordersMsg';
import Mooping from '../../img/mopping.png';
import {
  requestAllOrders, changeStatusSallon, btnStatusSaloon,
} from '../../service/ordersServices';

const Div = styled.div`
margin-top: 16rem;
font-family: Bob;
font-size: 16px;
display: flex;
justify-content: center;
`;

function OrdersSaloon() {
  const [ordersDone, setOrdersDone] = useState([]);

  const filterOrdersDone = () => {
    requestAllOrders()
      .then((json) => {
        const allOrders = json.filter((item) => item.status === 'ready');
        return setOrdersDone(allOrders);
      });
  };

  useEffect(() => {
    filterOrdersDone();
  }, []);

  return (
    <>
      <Header />
      <Div>
        <h1>  </h1>
      </Div>
      {ordersDone.length > 0 ? (
        <OrdersArea
          msg="Pedidos Prontos"
        >
          {ordersDone.map((item, index) => (
            <OrdersKitchen
              key={item.id}
              table={item.table}
              client_name={item.client_name}
              status={item.status}
              createdAt={new Date(item.createdAt).toLocaleString('pt-br')}
              updatedAt={new Date(item.updatedAt).toLocaleString('pt-br')}
            >
              {item.Products.map((prod) => (
                <OrdersProducts
                  key={prod.id}
                  name={prod.name}
                  flavour={prod.flavour}
                  complement={prod.complement}
                  qtd={prod.qtd}
                />
              ))}
              <Button
                buttonClass="btn-status"
                buttonOnClick={() => changeStatusSallon(item.id, item.status)
                  .then((response) => {
                    const changedOrders = [...ordersDone];
                    changedOrders[index].status = response.status;
                    setOrdersDone(changedOrders);
                  })}
              >
                {btnStatusSaloon(item.status)}
              </Button>
            </OrdersKitchen>
          ))}
        </OrdersArea>

      ) : (
        <OrdersMsg
          img={Mooping}
        >
          Não se preocupe, temos um salão inteiro para você limpar.
        </OrdersMsg>
      ) }

    </>

  );
}

export default OrdersSaloon;

import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header/header';
import OrdersArea from '../../components/OrdersArea/ordersArea';
import OrdersKitchen from '../../components/OrdersKitchen/ordersKitchen';
import OrdersProducts from '../../components/OrdersProducts/ordersProducts';
import Button from '../../components/Button/button';
import OrdersMsg from '../../components/OrdersMsg/ordersMsg';
import Garbage from '../../img/garbage.png';
import { requestAllOrders, deleteOrder } from '../../service/ordersServices';
import ModalMsg from '../../components/ModalMsg/modalMsg';

const Delivered = styled.section`
display: flex;
flex-direction: column;
align-items: center;
font-family: Bob;
font-size: 20px;
margin-top: 18rem;


@media (min-width: 1440px) {
  padding: 2rem;
}
`;

function OrdersDeliverd() {
  const [ordersDelivered, setOrdersDelivered] = useState([]);
  const [confirmModal, setConfirmModal] = useState(null);

  // const history = useHistory();

  // const ordersDeleted = () => {
  //   history.push('/orders-delivered');
  // };

  const filterOrdersDelivered = () => {
    requestAllOrders()
      .then((json) => {
        const allOrders = json.filter((item) => item.status === 'delivered');
        return setOrdersDelivered(allOrders);
      });
  };

  useEffect(() => {
    filterOrdersDelivered();
  }, []);

  return (
    <>
      <Header />
      <Delivered>
        <h2> </h2>
      </Delivered>
      {ordersDelivered.length > 0 ? (
        <OrdersArea
          msg="Pedidos Entregues"
        >
          {ordersDelivered.map((item, index) => (
            <OrdersKitchen
              key={item.id}
              table={item.table}
              client_name={item.client_name}
              status={item.status}
              createdAt={new Date(item.processedAt).toLocaleString('pt-br')}
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
                buttonOnClick={() => deleteOrder(item.id)
                  .then((response) => {
                    const changedOrders = [...ordersDelivered];
                    changedOrders[index].id = response.id;
                    setOrdersDelivered(changedOrders);
                    setConfirmModal(item.id);
                  })}
              >
                Excluir
              </Button>
            </OrdersKitchen>
          ))}
        </OrdersArea>

      ) : (
        <OrdersMsg
          img={Garbage}
        >
          A cozinha está com o lixo acumulado. Ajude o Bob.
        </OrdersMsg>
      )}

      <ModalMsg
        isOpen={Boolean(confirmModal)}
        msg="Pedido exluído com sucesso."
      >
        <Button
          buttonClass="btn-status"
          buttonOnClick={() => setConfirmModal(null)}
        >
          Ok
        </Button>
      </ModalMsg>

    </>
  );
}

export default OrdersDeliverd;

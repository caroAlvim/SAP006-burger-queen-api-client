import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/header';
import OrdersArea from '../../components/OrdersArea/ordersArea';
import OrdersKitchen from '../../components/OrdersKitchen/ordersKitchen';
import OrdersProducts from '../../components/OrdersProducts/ordersProducts';
import Button from '../../components/Button/button';
import {
  requestAllOrders, changeStatusSallon, btnStatusSaloon,
} from '../../service/ordersServices';

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

      <OrdersArea>
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

    </>

  );
}

export default OrdersSaloon;

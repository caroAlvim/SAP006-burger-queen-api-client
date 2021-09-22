import React from 'react';
import './kitchen.css';
import Header from '../../components/HeaderKitchen/headersKitchen';
import OrdersArea from '../../components/OrdersArea/ordersArea';
import OrdersKitchen from '../../components/OrdersKitchen/ordersKitchen';

function Kitchen() {
  // useEffect(() => {
  //   getAllOrders();
  // }, []);

  // const [orders, setOrders] = useState(1);
  // const token = localStorage.getItem('token');
  // const getAllOrders = () => {
  //   fetch('https://lab-api-bq.herokuapp.com/orders', {
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `${token}`,

  //     },

  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const orders = json.filter((item) => item.type === 'all-day');
  //       setOrders(orders);
  //     });
  // };

  return (
    <>
      <Header />
      <div className="container-kitchen">
        <h1>Pedidos</h1>
        <OrdersArea>
          <OrdersKitchen />
        </OrdersArea>
      </div>

    </>

  );
}

export default Kitchen;

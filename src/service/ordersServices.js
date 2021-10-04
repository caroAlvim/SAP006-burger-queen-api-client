/* eslint-disable max-len */

const token = localStorage.getItem('token');
const apiRequestOrders = 'https://lab-api-bq.herokuapp.com/orders';

export const requestAllOrders = () => {
  const result = fetch(`${apiRequestOrders}`, {
    headers: {
      accept: 'application/json',
      Authorization: `${token}`,
    },
  })
    .then((response) => response.json());
  return result;
};

export const btnTextStatus = (status) => {
  switch (status) {
    case 'pending':
      return 'Aguardando';

    case 'processing':
      return 'Em andamento';

    case 'ready':
      return 'Pronto';

    case 'delivered':
      return 'Entregue';

    default:
      return 'Aguardando';
  }
};

const putRequest = (status) => {
  const optionsApi = {
    method: 'PUT',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({ status }),
  };
  return optionsApi;
};

const changeStatusAPI = (id, status) => (
  fetch(`${apiRequestOrders}/${id}`, putRequest(status))
    .then((response) => response.json())
);

export const changeStatusBtn = (id, status) => {
  switch (status) {
    case 'pending':
      return changeStatusAPI(id, 'processing');

    case 'processing':
      return changeStatusAPI(id, 'ready');

    default:
      return changeStatusAPI(id, 'pending');
  }
};

// export const convertTime = (convertDate) => {
//   const time = new Date().toLocaleDateString('pt-br');
// };

// Sallon services
export const btnStatusSaloon = (status) => {
  switch (status) {
    case 'ready':
      return 'Pronto';

    case 'delivered':
      return 'Entregue';

    default:
      return 'Pronto';
  }
};

export const changeStatusSallon = (id, status) => {
  switch (status) {
    case 'ready':
      return changeStatusAPI(id, 'delivered');

    case 'delivered':
      return changeStatusAPI(id, 'ready');

    default:
      return changeStatusAPI(id, 'delivered');
  }
};

const requestDeleteOrder = (id) => {
  const optionsApi = {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST',
    },
    body: JSON.stringify({ id }),
  };
  return optionsApi;
};

export const deleteOrder = (id) => (
  fetch(`${apiRequestOrders}/${id}`, requestDeleteOrder(id))
    .then((response) => response.json())
);

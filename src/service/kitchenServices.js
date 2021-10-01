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

export const changeStatusAPI = (id, status) => (
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

export const removeItem = (remove) => (remove.item);
export const authUserKitchen = () => {
  const token = localStorage.getItem('token');
  const roleUser = localStorage.getItem('role');

  if (token !== null && token !== 'undefined' && roleUser === 'cozinha') {
    return true;
  }
  return false;
};

export const authUserSaloon = () => {
  const token = localStorage.getItem('token');
  const roleUser = localStorage.getItem('role');

  if (token !== null && token !== 'undefined' && roleUser === 'salao') {
    return true;
  }
  return false;
};

export const authUser = () => {
  const token = localStorage.getItem('token');

  if (token !== null && token !== 'undefined') {
    return true;
  }
  return false;
};

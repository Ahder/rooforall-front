import axios from 'axios';

let token = null;
let username = '';
const URL = 'http://localhost:8080';
const config = {
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
};

export const login = async (anUsername, aPassword) => {
  const responseLogin = await axios.post(`${URL}/login`, {
    username: anUsername,
    password: aPassword,
  });

  token = responseLogin.headers.authorization.substring(7);

  localStorage.setItem('token', token);
  token = localStorage.getItem('token');
  username = responseLogin.data.username;
  localStorage.setItem('username', username);

  console.log(token);
  return responseLogin.data;
};

export const register = async (anUsername, aPassword, anEmail) => {
  const responseSignUp = await axios.post(`${URL}/api/users/signUp`, {
    username: anUsername,
    password: aPassword,
    email: anEmail,
  });

  const logUser = await login(anUsername, aPassword);

  return logUser;
};
export const createRecord = async (
  anHabitatType,
  aBudgetMin,
  aBudgetMax,
  anHabitationSurface,
  aTown
) => {
  return axios.post(
    `${URL}/api/records`,
    {
      draft: false,
      habitatType: anHabitatType,
      budgetMin: aBudgetMin,
      budgetMax: aBudgetMax,
      habitationSurface: anHabitationSurface,
      town: aTown,
    },
    config
  );
};

export const getUserInformations = async () => {
  const userInformations = await axios.get(`${URL}/api/users/getInfo`, config);
  return userInformations.data;
};

export const getToken = () => token;

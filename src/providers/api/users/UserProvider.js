import axios from 'axios';

const URL = 'http://localhost:8080';
export const register = (anUsername, aPassword, anEmail) =>
  axios.post(`${URL}/api/users/signUp`, {
    username: anUsername,
    password: aPassword,
    email: anEmail,
  });

export const login = (anUsername, aPassword) =>
  axios.post(`${URL}/login`, {
    username: anUsername,
    password: aPassword,
  });

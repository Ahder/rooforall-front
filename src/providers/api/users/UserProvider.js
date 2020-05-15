import axios from 'axios';

const URL = 'http://localhost:8080/api/users/signUp';

export default function signUpUer(anusername, aPassword, anEmail) {
  return axios.post(URL, {
    username: anusername,
    password: aPassword,
    email: anEmail,
  });
}

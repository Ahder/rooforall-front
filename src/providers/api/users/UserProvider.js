import axios from 'axios';

const URL = 'http://localhost:8080/api/users/signUp';

export default function signUpUer(anUsername, aPassword, anEmail) {
  return axios.post(URL, {
    username: anUsername,
    password: aPassword,
    email: anEmail,
  });
}

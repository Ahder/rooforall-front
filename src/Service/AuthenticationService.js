import axios from 'axios';
import { Redirect } from 'react-router-dom';

const API_URL = 'http://localhost:8081';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';


class AuthenticationService {

    async executeJwtAuthenticationService(username, password) {
        //console.log(username);
        let response = await axios.post(`${API_URL}/login`, {
            username,
            password
        });
        if(response.status === 200){
            console.log(response.status);
            return true;
        }else{
            console.log(response.status);
            return false;
        }
    }

    logout() {
        //sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token;
                }
                return config;
            }
        )
    }
}

export default new AuthenticationService();
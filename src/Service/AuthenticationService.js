import axios from 'axios';

const API_URL = 'http://localhost:8081';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'admin';


class AuthenticationService {
/*
    constructor(){
        this.state = {
            isAuthenticated: false,
        }
    }

    
    executeBasicAuthenticationService (username, password){
        axios.post(`${API_URL}/login`,{
            headers: {authorization: this.createBasicAuthToken(username, password)}
        }).then((response) => {
            console.log(response.status);
            this.setState({isAuthenticated: true});
            console.log(this.isAuthenticated);
        }).catch ((error) => {
            console.log(error);
        });
    }
*/
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
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false;
        return true;
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return '';
        return user;
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
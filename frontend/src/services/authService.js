// import jwtDecode from "jwt-decode";
import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
    const { data: user } = await http.post(apiEndpoint, {
        email,
        password,
    });
    localStorage.setItem(tokenKey, JSON.stringify(user.data));
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, JSON.stringify(jwt));
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const user = localStorage.getItem(tokenKey);
        // return jwtDecode(jwt);
        return JSON.parse(user);
    } catch (ex) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

const auth = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
};

export default auth;

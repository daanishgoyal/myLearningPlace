import http from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/register";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
    });
}

import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {payloadLogIn, payloadSignUp} from "../models/auth/Auth";
import Utils from "../Utils";

const api = axios.create({
    baseURL: "http://localhost:8080/",
});

api.interceptors.request.use((config: any) => {
    const token = Utils.getToken();
    if (token) config.headers.Authorization = token;
    return config;
}, (error) => Promise.reject(error));


class Api {

    static signUp(payload: payloadSignUp): Promise<AxiosResponse> {
        return api.post("/api/auth/signup/", {
            username: payload.username,
            email: payload.email,
            password: payload.password
        });
    }

    static signIn(payload: payloadLogIn): Promise<AxiosResponse> {
        return api.post("/api/auth/signin/", {
            username: payload.username,
            password: payload.password
        });
    }

    static userContent(): Promise<AxiosResponse> {
        return api.get("/api/test/user/");
    }
}

export default Api;

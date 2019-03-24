import { AxiosInstance } from "axios";

export default class BaseAPI {
    protected axios: AxiosInstance;

    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
}


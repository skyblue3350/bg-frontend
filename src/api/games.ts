import BaseAPI from "./base";

export default class GamesAPI extends BaseAPI {
    constructor(axios) {
        super(axios);
        this.axios.defaults.baseURL += "/api/v1/";
    }

    find() {
        return this.axios.get(
            "games"
        )
    }
}


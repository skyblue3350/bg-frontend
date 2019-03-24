import BaseAPI from "./base";

export default class GamesAPI extends BaseAPI {
    constructor(axios) {
        super(axios);
    }

    find() {
        return this.axios.get(
            "games"
        )
    }
}


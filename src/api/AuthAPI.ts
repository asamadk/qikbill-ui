import { CollectionAPI } from "@/utils/CollectionAPI";

class AuthAPI extends CollectionAPI<any> {
    constructor() {
        super('/api/v1/auth');
    }

    async login(data: {phone: string,password: string,keepLoggedIn: boolean}): Promise<any> {
        return this.update(data);
    }

    async signup(data: {phone: string,password: string}): Promise<any> {
        return this.create(data);
    }

    async logout(): Promise<any> {
        return this.api.post(`${this.endpoint}/logout`);
    }
}

export default new AuthAPI();

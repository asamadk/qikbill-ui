import { CollectionAPI } from "@/utils/CollectionAPI";

class AuthAPI extends CollectionAPI<any> {
    constructor() {
        super('/api/v1/auth');
    }

    async login(data: { Phone: string, OTP: string }){
        return this.api.post(`${this.endpoint}/login`, data);
    }

    async signup(data: { phone: string, password: string }): Promise<any> {
        return this.api.post(`${this.endpoint}/login`, data, { withCredentials: false });
    }

    async logout(): Promise<any> {
        return this.api.post(`${this.endpoint}/logout`);
    }

    async sendOTP(data: { Phone: string }) {
        return this.api.post(`${this.endpoint}/otp`, data, { withCredentials: false })
    }
}

export default new AuthAPI();

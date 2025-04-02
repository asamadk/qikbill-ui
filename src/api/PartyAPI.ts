import { CollectionAPI } from "@/utils/CollectionAPI"
import axios from "axios"

class PartyAPI extends CollectionAPI<any> {

    constructor() {
        super('/api/v1/party')
    }

    getTransactions(partyID :string){
        return this.api.get(`${this.endpoint}/transactions/${partyID}`)
    }

}

export default new PartyAPI
import RequestPurchase from "./Requests/RequestPurchase";
import axios from "axios";
import Cheque from "../Entity/Cheque";


class Api {

    async fetchList()  {
        const response = await axios.get<Cheque[]>("/getcheque", {
            method: "get",
            responseType: "json"
        })
        if (response.status != 200)
            throw new Error("Данные та не правильные");

        return response.data;
    }

    AxiosPostPurchase(RequestsPur: RequestPurchase): void {
        axios.post("/newPurchase", RequestsPur);

    }

}

export default new Api();
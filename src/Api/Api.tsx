import RequestPurchase from "./Requests/RequestPurchase";
import axios from "axios";
import Cheque from "../Entity/Cheque";
import IPurchase from "../ViewModel/Interface/IPurchase";
import purchase from "../ViewModel/Purchase";
import Purchase from "../ViewModel/Purchase";


class Api {

    async fetchList(): Promise<Cheque[]> {
        const response = await axios.get<Cheque[]>("/getcheque", {
            method: "get",
            responseType: "json"
        })
        if (response.status !== 200)
            throw new Error("Данные та не правильные");

        return response.data;
    }

    async AxiosPostPurchase(RequestsPur: IPurchase): Promise<IPurchase>{
         const resp = await axios.post<IPurchase>("/addpurchase", RequestsPur);
         return resp.data;
    }

    async GetPurchase() : Promise<purchase[]> {
            const resp  = await axios.get<Purchase[]>("/getcheques", {
                method: "get",
                responseType: "json"
            });
            const t = resp.data
            console.log(t[0].date)
            return resp.data;
    }
}

export default new Api();
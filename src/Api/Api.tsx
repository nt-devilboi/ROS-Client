import axios, {AxiosError} from "axios";
import IPurchase from "../ViewModel/Interface/IPurchase";
import statusResponse from "./StatusResponse";
import StatusResponse from "./StatusResponse";
import PurchaseInfo from "../ViewModel/PurchaseInfo";


class Api {
    async AxiosPostPurchase(requestsPur: IPurchase): Promise<statusResponse> {
        const resp = await axios.post<IPurchase>("/addpurchase", requestsPur);

        return resp.status;
    }

    private CheckResponsePurchase(requestPur: IPurchase, responsePur: IPurchase): boolean {
        return requestPur.nameShop === responsePur.nameShop && responsePur.products[0].chequeId === requestPur.products[0].chequeId;
    }

    async GetPurchase(): Promise<{ purchases: PurchaseInfo[], status: StatusResponse }> {
        try {
            const resp = await axios.get<PurchaseInfo[]>("/cheques?limit=3&page=1", {
                method: "get",
                responseType: "json"
            });
            return {purchases: resp.data, status: resp.status};
        } catch (err) {
            const error = err as AxiosError<PurchaseInfo[], any>
            return {purchases: error.response!.data, status: error.response!.status};
        }
    }
}

export default new Api();
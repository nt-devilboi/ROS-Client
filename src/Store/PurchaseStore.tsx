import Purchase from "../ViewModel/Purchase";
import StatusResponse from "../Api/StatusResponse";
import statusResponse from "../Api/StatusResponse";
import Api from "../Api/Api";
import {makeAutoObservable} from "mobx";

export default class PurchaseStore {
    public Purchase: Purchase = new Purchase();
    public StatusResponse: StatusResponse = statusResponse.NotLoad; // Возможно не работает!!!

    constructor() {
        makeAutoObservable(this)
    }

    public async LoadToServer(): Promise<void> {
        this.StatusResponse = await Api.AxiosPostPurchase(this.Purchase);
    }
}
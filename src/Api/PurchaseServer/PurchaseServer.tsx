import {makeAutoObservable, observable} from "mobx";
import api from "../Api";
import PurchaseInfo from "../../ViewModel/PurchaseInfo";

export default class PurchaseServer {

    @observable
    public Purchase: PurchaseInfo[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async DownloadPurchase() {
        let {purchases, status} = await api.GetPurchase();
        console.log(purchases)
        this.Purchase = purchases;
    }
}
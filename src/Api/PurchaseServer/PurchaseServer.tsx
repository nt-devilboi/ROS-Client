import Purchase from "../../ViewModel/Purchase";
import {makeAutoObservable, observable} from "mobx";
import api from "../Api";
import IPurchaseServer from "./IPurchaseServer";
import purchase from "../../ViewModel/Purchase";
import IPurchase from "../../ViewModel/Interface/IPurchase";

export default class PurchaseServer implements IPurchaseServer{

    @observable
    public Purchase: Purchase[] = []

    constructor() {
        makeAutoObservable(this)
    }

    async DownloadPurchase() {
        let {purchases, status} = await api.GetPurchase();
        console.log(purchases)
        this.Purchase = purchases;
    }
}
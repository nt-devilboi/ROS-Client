import React from "react";
import Purchase from "../../ViewModel/Purchase";
import {action, makeAutoObservable, observable} from "mobx";
import api from "../Api";
import IPurchase from "../../ViewModel/Interface/IPurchase";
import IPurchaseServer from "./IPurchaseServer";

export default class PurchaseServer implements IPurchaseServer{

    @observable
    public ListPurchase: Purchase[] = []

    constructor() {
        makeAutoObservable(this)
    }

    @action
    async DownloadPurchase() {
        const list: IPurchase[] = await api.GetPurchase();
    }
}
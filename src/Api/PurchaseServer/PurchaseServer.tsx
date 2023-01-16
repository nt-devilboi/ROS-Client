import React from "react";
import Purchase from "../../ViewModel/Purchase";
import {action, makeAutoObservable, observable} from "mobx";
import api from "../Api";
import IPurchaseServer from "./IPurchaseServer";
import purchase from "../../ViewModel/Purchase";

export default class PurchaseServer implements IPurchaseServer{

    @observable
    public ListPurchase: Purchase[] = []

    constructor() {
        makeAutoObservable(this)
    }

    @action
    async DownloadPurchase() {
        const list : purchase[] = await api.GetPurchase();
        this.ListPurchase = list;
    }
}
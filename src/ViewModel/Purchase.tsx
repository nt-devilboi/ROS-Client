import {makeAutoObservable} from "mobx";
import Api from "../Api/Api";
import IProduct from "./Interface/IProduct";
import IPurchase from "./Interface/IPurchase";

class RequestPurchase implements IPurchase{
    Date: Date | null = null;
    Location: string = '';
    NameShop: string = '';
    Products: IProduct[] = [];

    //записать проверку на ошибки везде с выводом красными буквами, что не верно.
    constructor() {
        makeAutoObservable(this)
    }

    ChangeNameShop(nameShop: string): void {
        this.NameShop = nameShop;
    }

    ChangeLocation(location: string): void {
        this.Location = location;
    }

    AddProduct(product: IProduct): IProduct {
        this.Products.push(product);
        return product;
    }

    LoadToServer() {
        Api.AxiosPostPurchase(this);
    }

}

export default RequestPurchase;
import {makeAutoObservable} from "mobx";
import Api from "../Api/Api";
import IProduct from "./Interface/IProduct";
import IPurchase from "./Interface/IPurchase";

class Purchase implements IPurchase{

    public date: Date | null = null;
    public location: string = '';
    public nameShop: string = '';
    public products: IProduct[] = [];

    //записать проверку на ошибки везде с выводом красными буквами, что не верно.
    constructor() {
        makeAutoObservable(this)
    }

    Rest(): void{
        this.date = null;
        this.location = " ";
        this.nameShop = ' ';
        this.products = [];
    }
    ChangeNameShop(nameShop: string): void {
        this.nameShop = nameShop;
    }

    ChangeLocation(location: string): void {
        this.location = location;
    }

    AddProduct(product: IProduct): IProduct {
        this.products.push(product);
        return product;
    }

    LoadToServer(){
        Api.AxiosPostPurchase(this);
    }



}

export default Purchase;
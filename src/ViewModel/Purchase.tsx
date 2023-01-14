import {makeAutoObservable} from "mobx";
import Api from "../Api/Api";
import IProduct from "./Interface/IProduct";
import IPurchase from "./Interface/IPurchase";

class Purchase implements IPurchase{

    public Date: Date | null = null;
    public Location: string = '';
    public NameShop: string = '';
    public Products: IProduct[] = [];

    //записать проверку на ошибки везде с выводом красными буквами, что не верно.
    constructor() {
        makeAutoObservable(this)
    }

    Rest(): void{
        this.Date = null;
        this.Location = " ";
        this.NameShop = ' ';
        this.Products = [];
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

    LoadToServer(){
        Api.AxiosPostPurchase(this);
    }



}

export default Purchase;
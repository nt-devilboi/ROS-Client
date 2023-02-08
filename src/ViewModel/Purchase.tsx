import {makeAutoObservable} from "mobx";
import IProduct from "./Interface/IProduct";
import IPurchase from "./Interface/IPurchase";
import Product from "./Product";
import {Guid} from "guid-typescript";


class Purchase implements IPurchase {

    public date: Date | null = null;
    public location: string = '';
    public nameShop: string = '';
    public products: IProduct[] = [];

    //записать проверку на ошибки везде с выводом красными буквами, что не верно.
    constructor() {
        makeAutoObservable(this)
        this.products.push(new Product(Guid.create().toString()))
    }

    Rest(): void {
        this.date = null;
        this.location = '';
        this.nameShop = ' ';
        this.products = [];
        this.products.push(new Product(Guid.create().toString()))
    }

    ChangeNameShop(nameShop: string): void {
        this.nameShop = nameShop;
    }

    ChangeLocation(location: string): void {
        this.location = location;
    }

    AddProduct(): IProduct {
        let product: IProduct = new Product(this.products[0].chequeId.toString());
        this.products.push(product);
        return product;
    }

    GetSum(): number {
        let result: number = 0;
        for (let j = 0; j < this.products.length; j++)
            result += this.products[j].productPrice

        return result;
    }
}


export default Purchase;
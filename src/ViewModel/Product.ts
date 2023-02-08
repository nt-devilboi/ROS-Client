import {makeAutoObservable} from "mobx";
import IProduct from "./Interface/IProduct";
import {Guid} from "guid-typescript";

class Product implements IProduct {
    readonly productId: string;
    readonly chequeId: string;
    public productName: string;
    public productPrice: number;

    constructor(guidCheque: string) {
        makeAutoObservable(this)
        this.productName = '';
        this.productId = Guid.create().toString();
        this.chequeId = guidCheque;
        this.productPrice = 0;
    }

    ChangePrice(price: string): void {
        const p = Number(price)
        if (isNaN(p)) {
            console.log("ой ой данные не верны")
        }

        this.productPrice = p;
    }

    ChangeName(name: string): void {
        this.productName = name;
    }


}



export default Product
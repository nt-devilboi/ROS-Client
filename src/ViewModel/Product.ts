import {makeAutoObservable} from "mobx";
import IProduct from "./Interface/IProduct";
import {Guid} from "guid-typescript";

class Product implements IProduct {
    readonly chequeId: Guid = Guid.create().toJSON().value;
    readonly productId: Guid = Guid.create().toJSON().value;
    productName: string = '';
    productPrice: number = 0;

    constructor() {
        makeAutoObservable(this)
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
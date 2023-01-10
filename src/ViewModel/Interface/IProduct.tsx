import Product from "../../Entity/Product";
import {Guid} from "guid-typescript";

export default interface IProduct {
    readonly productId: Guid;
    productPrice: number;
    productName: string;
    readonly chequeId: Guid;

    ChangePrice(price : string): void
    ChangeName(name: string): void
}
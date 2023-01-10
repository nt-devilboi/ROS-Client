import React from "react";
import {Guid} from "guid-typescript";

type Product = {
    productId: Guid;
    productPrice: number;
    productName: string;
    ChequeId: Guid;
}

export default Product;
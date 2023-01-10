import React from "react";
import Product from "../../Entity/Product";
import IProduct from "../../ViewModel/Interface/IProduct";
type RequestPurchase = {
    NameShop: string;
    Location: string;
    Date: Date | null;
    Products: IProduct[]
}

export default RequestPurchase;
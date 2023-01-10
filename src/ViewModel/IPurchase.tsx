import IProduct from "./Interface/IProduct";

export default interface IPurchase{
    NameShop: string;
    Location: string;
    Date: Date;
    Products: IProduct[];
}
import IProduct from "./IProduct";
import Api from "../../Api/Api";

export default interface IRequestPurchase {
    Date: Date | null;
    Location: string;
    NameShop: string;
    Products: IProduct[];

    ChangeNameShop(nameShop: string): void

    ChangeLocation(location: string): void

    AddProduct(product: IProduct): IProduct

    LoadToServer(): void

}

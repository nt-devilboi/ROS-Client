import IProduct from "./IProduct";

export default interface IPurchase {
    Date: Date | null;
    Location: string;
    NameShop: string;
    Products: IProduct[];

    ChangeNameShop(nameShop: string): void

    ChangeLocation(location: string): void

    AddProduct(product: IProduct): IProduct

    LoadToServer(): void

}

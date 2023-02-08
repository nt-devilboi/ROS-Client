import IProduct from "./IProduct";

export default interface IPurchase {
    date: Date | null;
    location: string;
    nameShop: string;
    products: IProduct[];

    ChangeNameShop(nameShop: string): void

    ChangeLocation(location: string): void

    AddProduct(product: IProduct): IProduct

    GetSum(): number

    Rest(): void
}

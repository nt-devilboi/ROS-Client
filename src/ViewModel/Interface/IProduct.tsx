export default interface IProduct {
    readonly productId: String;
    productPrice: number;
    productName: string;
    readonly chequeId: String;

    ChangePrice(price : string): void
    ChangeName(name: string): void
}
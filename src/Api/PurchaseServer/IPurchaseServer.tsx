import Purchase from "../../ViewModel/Purchase";

export default interface IPurchaseServer{
    ListPurchase: Purchase[]
    DownloadPurchase(): void;
}





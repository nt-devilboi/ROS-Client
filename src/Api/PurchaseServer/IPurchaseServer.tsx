import Purchase from "../../ViewModel/Purchase";

export default interface IPurchaseServer{
    Purchase: Purchase[]
    DownloadPurchase(): void;
}





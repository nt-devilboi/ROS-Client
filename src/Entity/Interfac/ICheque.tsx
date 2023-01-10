import Cheque from "../Cheque";
export default interface ICheque extends Cheque{
    chequeId: string;
    shopId: string;
    totalAmount: number;
    time?: Date;
}
import React from "react";
import {Guid} from "guid-typescript";

class PurchaseInfo {

   public id: Guid = Guid.createEmpty();
   public nameShop : string = "";
   public totalAmount: number = 0;
   public location: string = "";

}
export default PurchaseInfo;
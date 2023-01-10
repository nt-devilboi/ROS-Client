import React from "react";

type Cheque  = {
    chequeId: string;
    shopId: string;
    totalAmount: number;
    time?: Date;
}

export default Cheque
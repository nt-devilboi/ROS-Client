import React from "react";
import IPurchaseServer from "../../Api/PurchaseServer/IPurchaseServer";
import PurchaseView from "../PurchaseView/PurchaseView";
import {observer} from "mobx-react";

@observer
export default class StorePurchases extends React.Component<{purchases : IPurchaseServer}>{

    componentDidMount() {
        this.props.purchases.DownloadPurchase();
    }

    render() {
        return (
            <div>
                {this.props.purchases.ListPurchase.map(p => <PurchaseView purchase={p}/>)}
            </div>
        );
    }
}
import React from "react";
import PurchaseView from "../PurchaseView/PurchaseView";
import {observer} from "mobx-react";
import './StorePurchases.css'
import PurchaseServer from "../../Api/PurchaseServer/PurchaseServer";

@observer
export default class StorePurchases extends React.Component<{ purchases: PurchaseServer }> {

    componentDidMount() {
        this.props.purchases.DownloadPurchase();
    }

    render() {
        return (
            <div className={"Purchases"}>
                <p>
                    {this.props.purchases.Purchase.map(p => <PurchaseView key={p.id.toString()} purchase={p}/>)}
                </p>
            </div>
        );
    }
}
import React from "react";
import IPurchaseServer from "../../Api/PurchaseServer/IPurchaseServer";
import PurchaseView from "../PurchaseView/PurchaseView";
import {observer} from "mobx-react";
import './StorePurchases.css'

@observer
export default class StorePurchases extends React.Component<{ purchases: IPurchaseServer }> {

    componentDidMount() {
        this.props.purchases.DownloadPurchase();
    }

    render() {
        return (
            <div className={"Purchases"}>
                <p>
                    {this.props.purchases.Purchase.map(p =>
                        <PurchaseView
                            key={p.products[0].chequeId.toString()}
                            purchase={p}/>
                    )}
                </p>
            </div>
        );
    }
}
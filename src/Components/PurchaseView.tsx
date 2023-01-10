import React from "react";
import IPurchase from "../ViewModel/IPurchase";

class PurchaseView extends React.Component<IPurchase>{
    render() {
        return <div>
            <h3>{this.props.NameShop}</h3>

        </div>
    }

}
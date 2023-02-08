import React from "react";
import IPurchase from "../../ViewModel/Interface/IPurchase";
import './StorePurchases.css'

export default class PurchaseView extends React.Component<{purchase: IPurchase}>{

    render() {
        return <div className="Purchase">
            <h2>{this.props.purchase.nameShop}</h2>
                <h3>{this.props.purchase.location}</h3>
            <p>Общая Сумма</p>
        </div>
    }
}
// менять key
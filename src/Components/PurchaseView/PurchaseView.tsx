import React from "react";
import './StorePurchases.css'
import PurchaseInfo from "../../ViewModel/PurchaseInfo";
import {Link} from "react-router-dom";

export default class PurchaseView extends React.Component<{ purchase: PurchaseInfo }> {

    render() {
        return <div className="Purchase">
            <h2>{this.props.purchase.nameShop}</h2>
            <h3>{this.props.purchase.location}</h3>
            <p>общая сумма: {this.props.purchase.totalAmount}</p>
            <Link to={"purchase"}>подробнее</Link>
        </div>
    }
}
// менять key
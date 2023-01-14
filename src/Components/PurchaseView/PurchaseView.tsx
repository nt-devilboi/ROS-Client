import React from "react";
import IPurchase from "../../ViewModel/Interface/IPurchase";
import ProductView from "../ProductView/ProductView";


export default class PurchaseView extends React.Component<{purchase: IPurchase}>{
    render() {
        return <div>
            <h2>{this.props.purchase.NameShop}</h2>
                <h3>{this.props.purchase.Location}</h3>
            {this.props.purchase.Products.map(p => <ProductView key={p.productId.toJSON().value} product={p} />)}
        </div>
    }
}
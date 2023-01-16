import React from "react";
import IPurchase from "../../ViewModel/Interface/IPurchase";
import ProductView from "../ProductView/ProductView";


export default class PurchaseView extends React.Component<{purchase: IPurchase}>{
    render() {
        return <div>
            <h2>{this.props.purchase.nameShop}</h2>
                <h3>{this.props.purchase.location}</h3>
            {this.props.purchase.products.map(p => <ProductView key={p.productPrice} product={p} />)}
        </div>
    }
}
// менять key
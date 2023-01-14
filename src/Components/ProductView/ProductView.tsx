import React from "react";
import IProduct from "../../ViewModel/Interface/IProduct";

class ProductView extends React.Component<{product: IProduct}>{
    render() {
        return (
            <div>
                <p>{this.props.product.productName} Цена: {this.props.product.productPrice}</p>
            </div>
        );
    }
}

export default ProductView;
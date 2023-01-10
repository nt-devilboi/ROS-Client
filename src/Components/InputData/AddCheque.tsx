import {observer} from "mobx-react";
import React from "react";
import InputProduct from "../InputProduct/InputProduct";
import Product from "../../ViewModel/Product";
import InputChange from "../InputField/InputChange";
import IRequestPurchase from "../../ViewModel/Interface/IRequestPurchase";
import requestPurchase from "../../ViewModel/RequestPurchase";

@observer
class AddCheque extends React.Component<{requestPurchase: IRequestPurchase}> {
    render() {
        return (
            <div>
                <InputChange func={(e: string) => this.props.requestPurchase.ChangeNameShop(e)}
                             infoInput="ведите название магазина"/>
                <InputChange func={(e: string) => this.props.requestPurchase.ChangeLocation(e)} infoInput='где купил'/>
                {this.props.requestPurchase.Products.map((p) => <InputProduct key={p.productId.toJSON()} product={p}/>)}
                <input type='button' defaultValue='добавить товар'
                       onClick={() => this.props.requestPurchase.AddProduct(new Product())}/>
                <input type='button' defaultValue="загрузить" onClick={() => {
                    this.props.requestPurchase.LoadToServer();
                    window.location.reload();
                }
                }/>
            </div>
        )
    }
}


export default AddCheque;
import {observer} from "mobx-react";
import React from "react";
import InputProduct from "../InputProduct/InputProduct";
import Product from "../../ViewModel/Product";
import InputChange from "../InputField/InputChange";
import IPurchase from "../../ViewModel/Interface/IPurchase";

@observer
class AddPurchase extends React.Component<{requestPurchase: IPurchase}> {


    render() {
        return (
            <div>
                <InputChange func={(e: string) => this.props.requestPurchase.ChangeNameShop(e)}
                             infoInput="ведите название магазина"/>
                <InputChange func={(e: string) => this.props.requestPurchase.ChangeLocation(e)} infoInput='где купил'/>
                {this.props.requestPurchase.Products.map((p) => <InputProduct key={p.productId.toString()} product={p}/>)}
                <input type='button' defaultValue='добавить товар'
                       onClick={() => this.props.requestPurchase.AddProduct(new Product())}/>
                <input type='button' defaultValue="загрузить" onClick={() => {
                   this.props.requestPurchase.LoadToServer();
                }
                }/>

            </div>
        )
    }
}


export default AddPurchase;
import {inject, IWrappedComponent, observer} from "mobx-react";
import React, {Component} from "react";
import InputProduct from "../../Components/InputProduct/InputProduct";
import InputChange from "../../Components/InputField/InputChange";
import ResponseStatus from "../../Components/ResponseStatus/ResponseStatus";
import Purchase from "../../ViewModel/Purchase";
import PurchaseStore from "../../Store/PurchaseStore";

type props = {
    purchaseStore: PurchaseStore;
}

@inject("purchaseStore")
@observer
class AddPurchase extends Component {
    get injected(){
        return this.props as props;
    }



    render() {
        const {purchaseStore} = this.injected;
        return (

            <div>
                <InputChange func={(e: string) => purchaseStore.Purchase.ChangeNameShop(e)}
                             placeholder="ведите название магазина"/>
                <InputChange func={(e: string) => purchaseStore.Purchase.ChangeLocation(e)}
                             placeholder='где купил'/>
                {
                    purchaseStore.Purchase.products.map((p) =>
                        <InputProduct key={p.productId.toString()} product={p}/>)
                }

                <input type='button' defaultValue='добавить товар'
                       onClick={() => purchaseStore.Purchase.AddProduct()}/>
                <input type='button' defaultValue="загрузить" onClick={() => purchaseStore.LoadToServer()}/>
                <ResponseStatus responseStatus={purchaseStore.StatusResponse}/>
            </div>
        )
    }
}


export default AddPurchase ;
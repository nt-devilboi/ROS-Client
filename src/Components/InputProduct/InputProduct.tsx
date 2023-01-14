import React from "react";
import {observer} from "mobx-react";
import IProduct from "../../ViewModel/Interface/IProduct";

@observer
class InputProduct extends React.Component<{product : IProduct},{}>{
    render() {
        return <div>
            <input type='text' placeholder='веди имя тавара' onChange={(e) => this.props.product.ChangeName(e.target.value)}/>
            <input type='number' placeholder='веди цену тавара' onChange={(e ) => this.props.product.ChangePrice(e.target.value)}/>
        </div>
        }
    }


export default InputProduct;
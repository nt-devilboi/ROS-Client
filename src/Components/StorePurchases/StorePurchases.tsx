import React from "react";
import IPurchaseServer from "../../Api/PurchaseServer/IPurchaseServer";

class StorePurchases extends React.Component<IPurchaseServer>{

    componentDidMount() {
        this.props.DownloadPurchase();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}
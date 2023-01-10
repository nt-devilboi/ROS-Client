import React from "react";
import listCheque from "../ListCheque/ListCheque";
import {observer} from "mobx-react";

@observer
class OutputCheque extends React.Component {
    async componentDidMount() {
        await listCheque.LoadCheque()
    }

    render() {
        return (
        <div>
            <div>
                {listCheque.List.map(x => <div>цена {x.totalAmount} Id Shop {x.shopId}</div>)}
            </div>
        </div>
        )
    }
}

export default OutputCheque;
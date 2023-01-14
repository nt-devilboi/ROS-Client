import Cheque from "../../Entity/Cheque";
import {action, makeAutoObservable, observable, runInAction} from "mobx";
import Api from "../Api";
class ListCheque {
    @observable
    List: Cheque[]

    constructor() {
        makeAutoObservable(this)
        this.List = []
    }

    @action
    async LoadCheque(){
        const list: Cheque[] = await Api.fetchList();
        console.log(list[0].totalAmount)
        runInAction(() => this.List = list)

    }
}

export default new ListCheque();
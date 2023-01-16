import React from 'react';
import './App.css';
import AddPurchase from "./Components/AddPurchase/AddPurchase";
import {Route, Routes} from "react-router-dom";
import requestPurchase from "./ViewModel/Purchase";
import StorePurchases from "./Components/StorePurchases/StorePurchases";
import PurchaseServer from "./Api/PurchaseServer/PurchaseServer";

function App() {


    return (
        <div className="App">
            <switch>

            </switch>
            <Routes>
                <Route path='/' element={<AddPurchase requestPurchase={new requestPurchase()}/>}/>
                <Route path='/Cheques' element={<StorePurchases purchases={new PurchaseServer()}/>}/>
            </Routes>
        </div>
    );
}

export default App;

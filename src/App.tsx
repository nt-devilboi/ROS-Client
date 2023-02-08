import React from 'react';
import './App.css';
import AddPurchase from "./Pages/AddPurchase/AddPurchase";
import {Route, Routes} from "react-router-dom";
import StorePurchases from "./Components/StorePurchases/StorePurchases";
import PurchaseServer from "./Api/PurchaseServer/PurchaseServer";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<AddPurchase />}/>
                <Route path='/Cheques' element={<StorePurchases purchases={new PurchaseServer()}/>}/>
            </Routes>
        </div>
    );
}

export default App;

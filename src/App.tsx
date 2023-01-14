import React from 'react';
import './App.css';
import AddPurchase from "./Components/AddPurchase/AddPurchase";
import OutputCheque from "./Components/OutputCheque";
import {Route, Routes} from "react-router-dom";
import requestPurchase from "./ViewModel/Purchase";

function App() {


    return (
        <div className="App">
            <switch>

            </switch>
            <Routes>
                <Route path='/' element={<AddPurchase requestPurchase={new requestPurchase()}/>}/>
                <Route path='/Cheques' element={<OutputCheque/>}/>
            </Routes>
        </div>
    );
}

export default App;

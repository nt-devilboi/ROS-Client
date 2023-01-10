import React from 'react';
import './App.css';
import AddCheque from "./Components/InputData/AddCheque";
import OutputCheque from "./Components/OutputCheque";
import {Route, Routes} from "react-router-dom";
import requestPurchase from "./ViewModel/RequestPurchase";

function App() {


    return (
        <div className="App">


            <Routes>
                <Route path='/inc' element={<AddCheque requestPurchase={new requestPurchase()}/>}/>
                <Route path='/Cheques' element={<OutputCheque/>}/>
            </Routes>
        </div>
    );
}

export default App;

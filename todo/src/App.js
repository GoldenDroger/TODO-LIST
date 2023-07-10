import React from "react"
import './App.css';
import Header from './components/Header'
import { useState } from "react";
import Field from "./components/Field";



function App() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [data, setdata] = useState([])

    const addData = () => {
        setdata(
            // object creating spread operator
            [...data, { name, email }]
        );
        setname("");
        setemail("")
    }
    //  function Remove(index) {
    //     data.splice(index,1);
        
    // }
    return (
        <div className="App">
            <Header />

            <div className="main">

                <input id="val1" value={name} onChange={(event) => setname(event.target.value)} placeholder="Enter Name"></input>
                <input id="val2" value={email} onChange={(event) => setemail(event.target.value)} placeholder="Enter Email"></input>
                <button className="btn" onClick={addData}>ADD</button>
            </div>

            <div className="data">
                <h1>Name</h1>
                <h1>Email</h1>
                <h1>Delete</h1>
            </div>
            {
                data.map((element, index) => {
                    return (
                        <Field name={element.name} email={element.email} index={index} />
                            
                        )
                })
            }

   
        </div>
    );
}

export  default App;

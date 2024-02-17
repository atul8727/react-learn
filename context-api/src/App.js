import './App.css';
import { CommonContext } from './components/CommonContext';
import React, { useState }  from 'react';
import Mains from './components/Main.js';

function App() {

    const [text, setText] = useState("");
    const [text2, setText2] = useState("csdcas");

        return (
            <div className="App">
                <CommonContext.Provider value={ { text, setText,text2,setText2} }>

                    <h1>example of common context</h1>
                    <Mains />
                </CommonContext.Provider>
            </div>
        );
    }

export default App;

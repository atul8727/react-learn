import React,{useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Home from './Components/Home';
import  About  from './Components/About';
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404';
import User from "./Components/User";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
import Form from "./Components/Form";
import Prestate from "./Components/Prestate";


function App(props) {
    let [count,setCount] = useState(1);
    return (
        <div className='App'>
            <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<Protected Cmp={Home}/>}></Route>
            <Route path='/about' element={<About />}></Route>
             <Route path='/user/:name' element={<User count={count} />}></Route>
            <Route path='/*' element={<Page404 />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/prev' element={<Prestate />}></Route>
            </Routes>
            </BrowserRouter>

            <button onClick={() => setCount(count + 1 )}>click</button>
        </div>
    );
}

export default App;

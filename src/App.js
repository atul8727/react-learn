import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import  Home from './Components/Home';
import  About  from './Components/About';
import NavBar from './Components/NavBar';
import Page404 from './Components/Page404';
import User from "./Components/User";

function App(props) {
    return (
        <div className='App'>
            <BrowserRouter>
            <NavBar/>
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/user/:name' element={<User />}></Route>
            <Route path='/*' element={<Page404 />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

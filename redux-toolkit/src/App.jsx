import { useState } from 'react'
import './App.css'
import Addtodo from './component/Addtodo';
import Todos from './component/Todos';

function App() {

  return (
    <div>
    <h1>REdux toolkit</h1>
    <Addtodo/>
    <Todos />
    </div>
  )
}

export default App

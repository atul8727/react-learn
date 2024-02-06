import React,{useEffect} from 'react'
import { useNavigate  } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  let login=(e)=>{
    // e.preventDefault();
    localStorage.setItem('login',true);
  }
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(login) {
            navigate('/')
        }
      });


  return (
    <div><h1>Login</h1>
    <input type='text'/><br/>
    <input type='text'/><br/>
    <button onClick={login}>Login</button>
    </div>
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const {Cmp} = props;
    let navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if(!login) {
            navigate('/login')
        }
    });
  return (
    <div>
      <Cmp />
    </div>
  )
}

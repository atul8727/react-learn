import React,{useEffect, useState} from 'react';
// import { useSearchParams } from 'react-router-dom';

function About(props) {
    //  let [searchParams, setSearchParams] = useSearchParams();
    // alert(searchParams.get('age'))

    let[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp)
                setData(resp)
            });
        })
    },[]);
    // console.log(data)
    return (
        <div>
            <h1>About Page</h1>
            <table>
                <thead>       
                      <tr>
                    <td>ID</td>
                    <td>Title</td>
                    <td>Body</td>
                    <td>UserID</td>
                </tr></thead>
                <tbody>
                {
                    data.map((item,key)=>
                        <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>{item.userId}</td>
                        </tr>
                    )
                }
                </tbody>
               
            </table>
        </div>
    );
}

export default About;

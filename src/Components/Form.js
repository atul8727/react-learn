import React,{useState} from 'react'

export default function Form() {
    let [id,setID]=useState("");
    let [title,setTitle]=useState("");
    let [body,setBody]=useState("");
    let [userid,setuserId]=useState("");
 
    function submitForm() {
        let data = {id,title,body,userid};
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(data)
         }).then((result)=>{
            result.json().then((res)=>{
                console.log(res)
            })
            
         })
    }
  return (
    <div>
        <h1>Post API TEST</h1>
        ID<input type='text' value={id} name="id" onChange={(e)=>{setID(e.target.value)}}/><br/>
        Title<input type='text' value={title} name="title" onChange={(e)=>{setTitle(e.target.value)}}/><br/>
        Body<input type='text' value={body} name="body" onChange={(e)=>{setBody(e.target.value)}}/><br/>
        UserID<input type='text'value={userid} name="userid" onChange={(e)=>{setuserId(e.target.value)}}/><br/>
        <button type='submit' onClick={submitForm}>save</button>
      
    </div>
  )
}

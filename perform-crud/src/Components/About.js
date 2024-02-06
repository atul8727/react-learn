import React,{useEffect, useState} from 'react';
// import { useSearchParams } from 'react-router-dom';

function About(props) {
    //  let [searchParams, setSearchParams] = useSearchParams();
    // alert(searchParams.get('age'))
    let [id, setId] = useState("");
    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [userId, setUserId] = useState("");

    let[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((result)=>{
            result.json().then((resp)=>{
                // console.log(resp)
                setData(resp)
                setId(resp[0].id)
                setTitle(resp[0].title)
                setBody(resp[0].body)
                setUserId(resp[0].userId)
            });
        })
    },[]);

    function getList() {

    }

    function updateData(id) {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((result) => {
            result.json().then((resp) => {
                setId(resp.id)
                setTitle(resp.title)
                setBody(resp.body)
                setUserId(resp.userId)

           })
       })
    }


    // console.log(data)
    function deleteUser(id) {
           fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
           }).then((result)=> {
               result.json((res) => {
                console.log(res)
            })
        });
    }

    function updateDataByID() {
        let data = { id, title, body, userId };
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json(result).then((res) => {
                console.log(res)
            })
        })

      }
    return (
        <div>
            <h1>About Page</h1>
            <table border="1px">
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
                            <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
                            <td><button onClick={()=>updateData(item.id)}>Edit</button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            <div>
                ID<input type='text' value={id } onChange={(e)=>{setId(e.target.value)}}/><br/>
                Title<input type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
                Body<input type='text' value={body} onChange={(e)=>{setBody(e.target.value)}}/><br/>
                UserId<input type='text' value={userId} onChange={(e) => { setUserId(e.target.value) }} /><br />
                <button onClick={updateDataByID}> Update</button>
            </div>
        </div>
    );
}

export default About;

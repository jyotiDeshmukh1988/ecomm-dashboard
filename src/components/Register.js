import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () =>{
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    async function signUp(){
        let items = {name,password,email};
        console.log(typeof(items));
        let result = await fetch("http://localhost:9000/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body:JSON.stringify(items),
        });
        let resultdata = await result.json();
        console.log(typeof(JSON.stringify(resultdata)));
        localStorage.setItem("mytoken", JSON.stringify(resultdata));
        navigate('/addproduct');
    }
    return(
        <>
        <div className='col-sm-6 offset-sm-3 mt-5'>
            <h1>User SignUp</h1><br/>
            <label>Enter Username</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control"/><br/>
            <label>Enter Password</label>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control"/><br/>
            <label>Enter Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/><br/>
            <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
        </div>
        </>
    )
}

export default Register
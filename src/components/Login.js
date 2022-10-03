import Header from "./Header";
import {useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () =>{
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    async function login() {
        console.log(email,password);
        let item = {email,password};
        let results = await fetch("http://localhost:9000/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(item),
        });
        results = await results.json();
        console.log(results);
        if(results.status === 401){
            navigate('/login');
        }
        else{
        localStorage.setItem("mytoken",JSON.stringify(results));
        navigate('/addproduct');
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('mytoken')){
            navigate('/addproduct');
        }
    },[]);
    return(
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <br/><h1>Login</h1>
            <input type="text" value={email} className="form-control" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <input type="password" value={password} className="form-control" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <button className="btn btn-primary" onClick={login}>Login</button>
        </div>
            
        </>
    )
}

export default Login
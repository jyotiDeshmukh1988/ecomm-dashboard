import Header from "./Header";
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('mytoken')){
            navigate('/addproduct');
        }
    },[]);
    return(
        <>
            <Header/>
            <h1>Login</h1>
        </>
    )
}

export default Login
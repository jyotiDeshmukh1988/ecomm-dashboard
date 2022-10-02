
import { Outlet, Navigate } from 'react-router-dom';
const Protected = () =>{
    let token = localStorage.getItem('mytoken');
    return(
        <>
        {token ?<Outlet/>:<Navigate to="/register"/>}
        </>
    )
}

export default Protected
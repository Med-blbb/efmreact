import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeConnect } from "../redux/StgSlice";

const Login = ()=>{
    const [login ,setLogin] = useState("")
    const [pass, setPass] = useState("");
    const navigate = useNavigate()
    const stgs = useSelector((state)=>state.stgs)
    const dispatch =useDispatch()

    const handleConnect =()=>{
        const stg = stgs.filter(s => s.nom == login && s.pass == pass)
        if (stg.length > 0){
            dispatch(changeConnect(true));
            navigate("/")
            
        }
        else{
            navigate('/login')
        }
    }
    return(
        <div>
            <input type="text" name="name" placeholder="Enter Your User" value={login} onChange={(e)=>setLogin(e.target.value)}/> <br />
            <input type="password" placeholder="Enter Your Password" value={pass} onChange={(e)=>setPass(e.target.value)} /><br />
            <button  onClick={handleConnect}>Login</button>
        </div>
    )
}
export default Login
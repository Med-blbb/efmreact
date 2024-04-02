import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { useDispatch, useSelector } from "react-redux";
import { changeConnect } from "../redux/StgSlice";
const Header =()=>{
    const dispatch = useDispatch()
    const isConnect = useSelector((state) => state.isConnect);
    return (
        <div className="hdr"> 
            <div className="hdr-links">
                <Link to='/liststg'>List des stagiaires</Link>
                <Link to="/addstg">Ajouter un stagiaire</Link>
                {isConnect ? <button onClick={()=>dispatch(changeConnect(false))}>Log Out</button> :""}
                
            </div>
        </div>
    )
}
export default Header
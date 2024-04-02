import React from "react";
import {useSelector } from "react-redux";
import "./ListStg.css"
import Stagiaire from "./Stagiaire";
const ListStg=()=>{
    
    const stgs = useSelector((state)=>state.stgs)
    return (
        <div className="stg-list">
            {stgs.map((s)=>(
                <Stagiaire nom={s.nom} image={s.image} />
            ))}
        </div>
    )
}

export default ListStg
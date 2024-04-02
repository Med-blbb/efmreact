import React from "react";
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

const DetailStg = ()=>{
    const {nom}=useParams()
    const stg = useSelector((state)=>state.stgs.find(s=>s.nom === nom))
    
    return (
      <div>
        <img src={stg.image} alt="" />
        <h2>{stg.nom}</h2>
        <h2>{stg.prenom}</h2>
        <h2>{stg.fonction}</h2>
      </div>
    );
}
export default DetailStg
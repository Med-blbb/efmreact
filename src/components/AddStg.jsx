import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStg } from "../redux/StgSlice";

const AddStg=()=>{
    const dispatch =useDispatch()
    const [image,setImage]=useState("")
    const [nom,setNom]=useState("")
    const [prenom,setPrenom]=useState("")
    const [fonction,setFonction] = useState("");
    ;
    return (
      <div>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Enter Your Image" />
        <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} placeholder="Enter Your Name" />
        <input type="text" value={prenom} onChange={(e)=>setPrenom(e.target.value)} placeholder="Enter Your Prenom"/>
        <input type="text" value={fonction} onChange={(e)=>setFonction(e.target.value)} placeholder="Enter Your Fonction"/>
        <button onClick={()=>dispatch(addStg({image,nom,prenom,fonction}))}>Ajouter</button>
      </div>
    );
}
export default AddStg;
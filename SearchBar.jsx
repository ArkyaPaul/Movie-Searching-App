import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function SearchBar(){
    const [title,setTitle]=useState('');
    const show=()=>{
        setTitle(document.getElementById('t1').value);
    }
    return(
        <>
            <div style={{backgroundColor:'blueviolet',textAlign:'center',height:'28px'}}>
                <b style={{color:'orange',margin:'5px'}}>Search for Movies:</b>
                <input type="text" name="" id="t1" style={{backgroundColor:'yellow',color:'blue'}}/>
                <Link to={`/${title}`}>
                    <button onClick={show} style={{borderRadius:'5px',backgroundColor:'red'}}>Ok</button>
                </Link>              
            </div>
        </>
    )
}
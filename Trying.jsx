import React,{useState,useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Trying(){
    const [info,setInfo]=useState([]);
    const {name}=useParams();
    useEffect(()=>{
        if(name){
        setTimeout(() => {
            axios.get(`https://www.omdbapi.com/?s=${name}&apikey=c6d4cc36`)
            .then((res)=>{
            setInfo(res.data);
        })
        .catch((err)=>{console.log(err);})
        }, 10);   
}},[name])


    return(
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',margin:'40px',border:'20px',backgroundColor:'lightorange'}}>
                {
                   info && info.Search && info.Search.map((val)=>(
                     val.Poster!=="N/A" && (
                        <div className="card">
                            <div className="card-image">
                                <Link to={`/${name}/${val.imdbID}`}>
                                    <img src={val.Poster} alt="" width='350px'/>
                                </Link>
                            </div>
                            <div className="card-body">
                                <p style={{textAlign:'center',fontSize:'20px'}}><b>{
                                    val.Title.length>25 ? val.Title.substr(0,25)+'...' :val.Title
                                    }</b></p>
                                <h3 style={{textAlign:'center', marginBottom:'50px'}}>{val.Type.charAt(0).toUpperCase()+val.Type.slice(1)} released in: {val.Year}
                                </h3>                        
                            </div>
                    </div>    
                     )                         
                ))}
            </div>  
    )
}
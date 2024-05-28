import React,{useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ShowMore(){
    const [info,setInfo]=useState([]);
    const {id}=useParams();
    {
        axios.get(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=c6d4cc36`)
        .then((res)=>{setInfo(res.data);})
        .catch((err)=>{console.log(err);})
    }
    return(
        <div style={{display:'flex',backgroundColor:'lightyellow'}}>
                <div style={{marginRight:'25px'}}>
                    <img src={info.Poster} alt="" width='400px'/>
                </div>
                <div>
                    <h1>{info.Title}</h1>
                    <h4>Genre: {info.Genre}</h4>
                    <h4>Release Date: {info.Released}</h4>
                    <h4>Runtime: {info.Runtime}</h4>
                    <h4>Rated: {info.Rated}</h4>
                    <h4>Director: {info.Director}</h4>
                    <h4>Cast: {info.Actors}</h4>
                    <h4>Language: {info.Language}</h4>
                    <h4>Plot: {info.Plot}</h4>
                    <h4>Ratings: {info.imdbRating}</h4>
                    <h4>Awards & Nominations: {info.Awards}</h4>
                    <h4>Box Office Collection: {info.BoxOffice}</h4>
                </div>
             </div>
    )
}
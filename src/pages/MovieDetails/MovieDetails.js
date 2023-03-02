import './MovieDetails.js';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const MovieDetails = () => {
    const navegador = useNavigate();
    const { id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=67372a2101549a124448d2d0c5b5653f`;

    const initialData = {
        "original_title":"",
        "overview":"",
        "gender":{},
        "adult":true,
        "backdrop_path":""
    }

    const [data, setData] = useState(initialData);

    const handleGoback = () => {
        navegador(-1);
    }

    const loadMovie = async()=> {
            const response = await fetch(url);
            if(response.ok){
                const jsonResponse = await response.json();
                setData(jsonResponse);
            }
    }

    useEffect(()=>{
        loadMovie();
    },[])

    
    
    return (
        <>
            <button onClick={handleGoback}>Go Back</button>
            <h4>Tittle:</h4>
            <text>{data.original_title}</text>
            <h4>OverView:</h4>
            <text>{data.overview}</text>
            <h4>Gender:</h4>
            
            <h4>Clasificacion</h4>
            <text>{data.adult?'Solo para adultos':'Todo Publico'}</text>
            <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}/>

            
        </>
    )
}
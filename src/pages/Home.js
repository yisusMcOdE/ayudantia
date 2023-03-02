import { useEffect, useState } from "react";
import { CardMovie } from "../components/CardMovie/CardMovie";
import { myFetch } from "../utilities/myFetch";
import { Link } from "react-router-dom";

import './Home.css';

export const Home = () => {

    const [data,setData] = useState([]);

    const getData = async() => {
        const data = await myFetch();
        setData(data.results);
        console.log(data);
    }

    useEffect(()=>{
        getData()
    },[])

    console.log(data);

    return(
            <div className="homeContainer">
                <h1>Page Home</h1>
                
                <h2>Peliculas Favoritas</h2>
                <input placeholder="search...."/>
                <div className="favoritesContainer">
                    {
                        data.map(item=>{
                            const id = item.id
                            return (<Link to= {`/details/${id}`}><CardMovie item = {item}/></Link>)
                        }
                            
                        )
                    }
                </div>
            </div>
    )
}
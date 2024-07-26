import {useState,useEffect } from 'react';
//6a117f84
import './App.css';
import MovieCard from './Moviecard';
//const API_URL='http://www.omdbapi.com?apikey=6a117f84';
const API_URL = `${process.env.REACT_APP_API_URL}?apikey=${process.env.REACT_APP_API_KEY}`;
const App=()=>{
    const [movie,setmovie]=useState([]);
    const [searchmovie,setsearchmovie]=useState('');
    
    const search=async (title)=>{
        const response=await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();
        setmovie(data.Search);
    }
    
    /*useEffect(()=>{
        search('Thor');
    },[])*/

    return (
        <div className="app">
            
            <h1>MoviesLand</h1>

            <div className="search"> 
                <input type="text" placeholder="search for movies" value={searchmovie}
                 onChange={(e)=>{setsearchmovie(e.target.value)}}></input>
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                   alt="search" onClick={()=>{search(searchmovie)}}
                   />
            </div>
            {movie?.length>0?
            <div className="container">
             {(movie.map((movies)=>(
               <MovieCard  movie={movies}/>
             )))}</div>:
             <div className="empty">
              <p>No movies found</p>
                </div>
            }
        </div>
    );

}

export default App;

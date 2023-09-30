import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// plug in your API key from https://www.omdbapi.com/apikey.aspx 
const API_URL = `http://www.omdbapi.com?apikey=`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    return (
        <div className="app">
            <h1>Movie Mingle</h1>
            <div className="search">
                <input
                   placeholder="Search for movies..."
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img 
                   src={SearchIcon} 
                   alt="search" 
                   onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => <MovieCard movie={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found 😢</h2>                    
                    </div>
                )
            } 
        </div>
    );
}

//We must export every single React component so we can use it somewhere else
export default App;

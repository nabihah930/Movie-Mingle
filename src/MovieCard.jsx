//JSX extension is preferred when working with React (not really a lot of diff b/w .js & .jsx file)
//Better to have components in .jsx files
import React from "react";

//File name and component name don't have to be the same its just good practice
const MovieCard = ({ movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img 
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} 
                    alt={movie.Title}
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
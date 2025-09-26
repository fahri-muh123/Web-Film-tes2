import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className="block group">
      <div className="card card-hover overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={
              movie.Poster !== "N/A" ? movie.Poster : "/placeholder-movie.jpg"
            }
            alt={movie.Title}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              View Details
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
              {movie.Year}
            </span>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-foreground group-hover:text-primary-500 transition-colors">
            {movie.Title}
          </h3>
          <div className="flex justify-between items-center text-sm text-muted">
            <span className="bg-card px-2 py-1 rounded border-border border">
              {movie.Type}
            </span>
            <div className="flex items-center space-x-1">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>OMDb</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;

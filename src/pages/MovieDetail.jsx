import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMovieDetail } from '../hooks/useMovies';
import Loading from '../components/Loading';
import Error from '../components/Error';

const MovieDetail = () => {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetail(id);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!movie) return <Error message="Movie not found" />;

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 mb-8 group transition-all duration-300"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-medium">Back to Discover</span>
      </Link>

      {/* Movie Detail Card */}
      <div className="bg-card border-border border rounded-3xl shadow-2xl overflow-hidden">
        <div className="lg:flex">
          {/* Poster Section */}
          <div className="lg:w-2/5 relative">
            <img 
              src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder-movie.jpg'} 
              alt={movie.Title}
              className="w-full h-96 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
            <div className="absolute bottom-4 left-4 lg:hidden">
              <h1 className="text-3xl font-bold text-white mb-2">{movie.Title}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
                  {movie.Year}
                </span>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {movie.Rated}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 p-8">
            {/* Header - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block mb-6">
              <h1 className="text-4xl font-display font-bold mb-3 text-foreground">{movie.Title}</h1>
              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {movie.Year}
                </span>
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {movie.Rated}
                </span>
                <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {movie.Runtime}
                </span>
                <span className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {movie.Genre}
                </span>
              </div>
            </div>

            {/* Rating Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                <div className="text-2xl font-bold">{movie.imdbRating}</div>
                <div className="text-sm opacity-90">IMDb Rating</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card border-border border text-foreground shadow-lg">
                <div className="text-2xl font-bold">{movie.imdbVotes}</div>
                <div className="text-sm text-muted">Votes</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card border-border border text-foreground shadow-lg">
                <div className="text-xl font-bold capitalize">{movie.Type}</div>
                <div className="text-sm text-muted">Type</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-card border-border border text-foreground shadow-lg">
                <div className="text-xl font-bold">{movie.Released}</div>
                <div className="text-sm text-muted">Released</div>
              </div>
            </div>

            {/* Plot */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gradient">Storyline</h3>
              <p className="text-lg leading-relaxed text-foreground">{movie.Plot}</p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-muted mb-2">Director</h4>
                <p className="text-lg text-foreground">{movie.Director}</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted mb-2">Actors</h4>
                <p className="text-lg text-foreground">{movie.Actors}</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted mb-2">Writer</h4>
                <p className="text-lg text-foreground">{movie.Writer}</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted mb-2">Language</h4>
                <p className="text-lg text-foreground">{movie.Language}</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted mb-2">Country</h4>
                <p className="text-lg text-foreground">{movie.Country}</p>
              </div>
              <div>
                <h4 className="font-semibold text-muted mb-2">Awards</h4>
                <p className="text-lg text-foreground">{movie.Awards}</p>
              </div>
            </div>

            {/* Additional Info */}
            {movie.BoxOffice && movie.BoxOffice !== 'N/A' && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl text-white text-center">
                <div className="text-2xl font-bold">{movie.BoxOffice}</div>
                <div className="text-sm">Box Office</div>
              </div>
            )}

            {/* Movie Metadata */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-muted">Runtime: </span>
                  <span className="text-foreground font-medium">{movie.Runtime}</span>
                </div>
                <div>
                  <span className="text-muted">Genre: </span>
                  <span className="text-foreground font-medium">{movie.Genre}</span>
                </div>
                <div>
                  <span className="text-muted">Released: </span>
                  <span className="text-foreground font-medium">{movie.Released}</span>
                </div>
                <div>
                  <span className="text-muted">Rated: </span>
                  <span className="text-foreground font-medium">{movie.Rated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
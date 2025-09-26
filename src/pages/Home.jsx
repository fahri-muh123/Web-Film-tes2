import React, { useState, useCallback } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("marvel");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const { movies, loading, error, totalResults } = useMovies(
    searchTerm,
    currentPage,
    sortBy
  );

  const totalPages = Math.ceil(totalResults / 10);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    setSearchTerm(search || "marvel");
    setCurrentPage(1);
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 ${
            currentPage === i
              ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg"
              : "bg-card text-foreground hover:bg-card border-border border shadow-md"
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex justify-center items-center space-x-3 mt-12 animate-fade-in">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-card text-foreground border-border border shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center space-x-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>Previous</span>
        </button>

        <div className="flex space-x-2">{pages}</div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-card text-foreground border-border border shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center space-x-2"
        >
          <span>Next</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Search Section */}
      <section className="text-center mb-12 py-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
          Discover Amazing Hero Movies
        </h2>
        <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
          Explore hundreds of hero movies, discover your next favorite hero movie, and dive into the world of cinema.
        </p>

        <form
          onSubmit={handleSearch}
          className="max-w-4xl mx-auto flex gap-4 mb-8"
        >
          <div className="flex-1 relative">
            <input
              type="text"
              name="search"
              placeholder="Search for movies... 🎬"
              defaultValue={searchTerm}
              className="w-full px-6 py-4 rounded-2xl bg-card border-border border text-foreground placeholder-muted focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 text-lg"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <button type="submit" className="btn-primary whitespace-nowrap">
            Search
          </button>
        </form>

        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <p className="text-muted">
            {totalResults > 0
              ? `🎉 ${totalResults} amazing results found`
              : "No results found 😔"}
          </p>
          <div className="relative">
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-3 pr-10 rounded-2xl bg-card/80 backdrop-blur-md border-border/50 border text-foreground focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:bg-card/100 shadow-lg"
            >
              <option value="">🎬 Sort Movies</option>
              <option value="year">📅 Newest First</option>
              <option value="title">🔤 A to Z</option>
              <option value="rating">⭐ Highest Rated</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-16">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-lg text-muted">
            Discovering amazing movies for you...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <Error
          message={error}
          onRetry={() => {
            setCurrentPage(1);
            setSearchTerm("marvel");
          }}
        />
      )}

      {/* Movies Grid */}
      {!loading && !error && (
        <>
          {movies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                No movies found
              </h3>
              <p className="text-muted">Try searching for something else!</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {movies.map((movie, index) => (
                  <div
                    key={movie.imdbID}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>

              {renderPagination()}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

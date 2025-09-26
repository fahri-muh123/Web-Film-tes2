import { useState, useEffect } from "react";

const API_KEY = "4319d39e";
const BASE_URL = "http://www.omdbapi.com/";

export const useMovies = (searchTerm = "marvel", page = 1, sortBy = "") => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}&page=${page}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        if (data.Response === "True") {
          let sortedMovies = data.Search;

          // Sorting logic
          if (sortBy === "year") {
            sortedMovies = sortedMovies.sort(
              (a, b) => parseInt(b.Year) - parseInt(a.Year)
            );
          } else if (sortBy === "title") {
            sortedMovies = sortedMovies.sort((a, b) =>
              a.Title.localeCompare(b.Title)
            );
          }

          setMovies(sortedMovies);
          setTotalResults(parseInt(data.totalResults));
        } else {
          setError(data.Error);
          setMovies([]);
        }
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, page, sortBy]);

  return { movies, loading, error, totalResults };
};

export const useMovieDetail = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      if (!id) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return { movie, loading, error };
};

import { useEffect, useState } from "react";

const MOVIE_API_KEY = "91eb2fce";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      const signal = controller.signal;

      async function fetchMovies() {
        try {
          setIsLoading(true);

          setError("");

          await new Promise((resolve) => setTimeout(resolve, 1000));

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&s=${query}`,
            { signal: signal }
          );

          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }

          const data = await res.json();

          if (data.Response === "False") {
            throw new Error("Movie not found!");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();

      return () => {
        controller.abort();
      };
    },
    [query]
  );

  return { isLoading, error, movies };
}

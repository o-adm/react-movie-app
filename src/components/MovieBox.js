import MovieItem from "./MovieItem";

export default function MovieBox({ movies, onSelectedMovie }) {
  return (
    <>
      {movies?.map((movie) => (
        <MovieItem
          key={movie.imdbID}
          movie={movie}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </>
  );
}

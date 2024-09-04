import { useEffect, useRef, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";

const MOVIE_API_KEY = "91eb2fce";

export default function MovieDetails({
  selected,
  onAddFavorite,
  favorite,
  onCloseModal,
}) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const nbrRatingClick = useRef(0);

  const isRated = favorite.map((fav) => fav.imdbID).includes(selected); // diff betww

  const userRatingNbr = favorite.find(
    (fav) => fav.imdbID === selected
  )?.userRating;

  useEffect(
    function () {
      if (userRating > 0) nbrRatingClick.current++;
    },
    [userRating]
  );

  const {
    Poster: poster,
    Title: title,
    Released: released,
    Genre: genre,
    Plot: plot,
    imdbRating,
    Runtime: runtime,
  } = movie;

  function handleFavorite() {
    const newMovie = {
      imdbID: selected,
      poster,
      title,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      nbrRatingClick: nbrRatingClick.current,
    };
    onAddFavorite(newMovie);
    onCloseModal();
  }

  useEffect(
    function () {
      async function fetchDetailsMovie() {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&i=${selected}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }

      fetchDetailsMovie();
    },
    [selected]
  );

  return (
    <div className="movie-details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="movie-details-box">
            <div className="movie-details__image-box">
              <img
                src={poster}
                alt={`Poster ${title}`}
                className="movie-details__image"
              />
            </div>
            <div className="movie-details__info">
              <h3 className="movie-details__title">{title}</h3>
              <span className="movie-details__released">
                <strong>Released on :</strong> {released}
              </span>
              <span className="movie-details__genre u-margin-large">
                <strong>Genre :</strong> {genre}
              </span>
              <p className="movie-details__plot">
                <strong>Overview : </strong>
                {plot}
              </p>
              <div className="movie-details__states">
                {!isRated ? (
                  <>
                    <StarRating
                      maxRating={10}
                      size={24}
                      onSetRating={setUserRating}
                    />
                    {userRating > 0 && (
                      <button
                        className="btn btn--favorite"
                        onClick={handleFavorite}
                      >
                        ADD TO FAVORITE
                      </button>
                    )}
                  </>
                ) : (
                  <p style={{ color: "#fff" }}>
                    You rated this movie :{" "}
                    {userRatingNbr > 1
                      ? `${userRatingNbr} ⭐ star`
                      : `${userRatingNbr} ⭐ stars`}
                  </p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

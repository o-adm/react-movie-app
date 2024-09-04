export default function FavoriteMoviesList({ favorite, onDelete }) {
  return (
    <>
      {favorite.map((fav) => (
        <div className="movie-favorite-details" key={fav.imdbID}>
          <div className="movie-favorite__image-box">
            <img src={fav.poster} alt={fav.title} />
          </div>
          <div className="movie-favorite-info">
            <h3 className="movie-favorite__title">{fav.title}</h3>
            <div className="movie-favorite__state">
              <p className="movie-favorite__stars">
                <span>⭐️</span>
                <span>{fav.imdbRating}</span>
              </p>
              <p className="movie-favorite__rating">
                <span>🌟</span>
                <span>{fav.userRating || 0}</span>
              </p>
              <p className="movie-favorite__runtime">
                <span>⏳</span>
                <span>{fav.runtime} min</span>
              </p>
            </div>
          </div>
          <button
            className="movie-favorite-delete"
            onClick={() => onDelete(fav.imdbID)}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

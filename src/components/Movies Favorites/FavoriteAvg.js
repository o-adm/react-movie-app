const avg = (arr) => arr.reduce((acc, curr) => acc + curr / arr.length, 0);

export default function FavoriteAvg({ favorite }) {
  const avgRating = avg(favorite.map((fav) => fav.imdbRating));
  const avgUserRating = avg(favorite.map((fav) => fav.userRating));
  const avgRuntime = avg(favorite.map((fav) => fav.runtime));
  return (
    <div className="movie-favorite__avg">
      <p>
        <strong>AVG :</strong>
      </p>
      <p className="movie-favorite__stars">
        <span>⭐️</span>
        <span>{avgRating.toFixed(2)}</span>
      </p>
      <p className="movie-favorite__rating">
        <span>🌟</span>
        <span>{avgUserRating.toFixed(2)}</span>
      </p>
      <p className="movie-favorite__runtime">
        <span>⏳</span>
        <span>{avgRuntime.toFixed(2)} min</span>
      </p>
    </div>
  );
}

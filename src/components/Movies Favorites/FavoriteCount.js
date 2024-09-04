import FavoriteAvg from "./FavoriteAvg";

export default function FavoriteCount({ favorite }) {
  return (
    <>
      {favorite.length > 0 && (
        <div className="movie-favorite__count">
          <p>
            You liked <strong>{favorite.length}</strong> movies
          </p>
          <FavoriteAvg favorite={favorite} />
        </div>
      )}
    </>
  );
}

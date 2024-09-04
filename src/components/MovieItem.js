export default function MovieItem({ movie, onSelectedMovie }) {
  const {
    Poster: poster,
    Title: title,
    Type: type,
    Year: year,
    imdbID,
  } = movie;

  return (
    <div
      alt={{ movie }}
      className="movie-box"
      onClick={() => onSelectedMovie(imdbID)}
    >
      <div className="movie-box__image-box">
        <img src={poster} alt={`${title} Movie`} className="movie-box__image" />
      </div>
      <div className="movie-box__info">
        <h3 className="movie-box__title">{title}</h3>
        <p className="movie-box__description u-margin-small">{type}</p>
        <div className="movie-box__release-date">
          <span>🗓</span>
          <span>{year}</span>
        </div>
      </div>
    </div>
  );
}

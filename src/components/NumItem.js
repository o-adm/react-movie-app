export default function NumItem({ movies }) {
  return (
    <div className="movie__nbr-item">
      <p className="movie__nbr-item-text">
        You have <strong>{movies.length}</strong> item
      </p>
    </div>
  );
}

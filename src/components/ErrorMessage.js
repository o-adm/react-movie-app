export default function ErrorMessage({ message }) {
  return (
    <div className="error">
      <p className="error__text"> ⛔ {message}</p>
    </div>
  );
}

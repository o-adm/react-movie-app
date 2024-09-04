import { useRef } from "react";
import { useKey } from "./Custom Hooks/useKey";

export default function SearchBar({ query, onCloseModal, setQuery }) {
  const inputSearch = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputSearch.current) return;
    inputSearch.current.focus();
    setQuery("");
    onCloseModal();
  });

  return (
    <div className="movies-searchbar">
      <input
        type="text"
        placeholder="Search for movies..."
        className="movies-searchbar__input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputSearch}
      />
    </div>
  );
}

import { useState } from "react";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar";
import Logo from "./components/Logo";
import HeaderNav from "./components/Header/HeaderNav";
import Main from "./components/Main";
import MovieBox from "./components/MovieBox";
import Loader from "./components/Loader";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section";
import ErrorMessage from "./components/ErrorMessage";
import NumItem from "./components/NumItem";
import Modal from "./components/Modal";
import MovieDetails from "./components/MovieDetails";
import FavoriteMovies from "./components/Movies Favorites/FavoriteMovies";
import FavoriteCount from "./components/Movies Favorites/FavoriteCount";
import FavoriteMoviesList from "./components/Movies Favorites/FavoriteMoviesList";
import { useMovies } from "./components/Custom Hooks/useMovies";
import { useLocalStorageState } from "./components/Custom Hooks/useLocalStorageState";

export default function App() {
  const [query, setQuery] = useState("");
  const { movies, isLoading, error } = useMovies(query);

  const [favorite, setFavorite] = useLocalStorageState([], "Favorites");

  const [showMovieModal, setShowMovieModal] = useState(false);
  const [selectedMovie, setSlectedMovie] = useState("");

  function handleShowMoadl() {
    setShowMovieModal(true);
  }

  function handleCloseModal() {
    setShowMovieModal(false);
    setSlectedMovie("");
  }

  function handleSelectedMovie(id) {
    setSlectedMovie((selected) => (selected !== id ? id : null));
    handleShowMoadl();
  }

  function handleFavorite(movie) {
    setFavorite((fav) => [...fav, movie]);
  }

  function handleDelete(id) {
    setFavorite((favorite) => favorite.filter((fav) => fav.imdbID !== id));
  }

  return (
    <div>
      <Header>
        <Logo />
        <SearchBar
          query={query}
          setQuery={setQuery}
          onCloseModal={handleCloseModal}
        />
        <HeaderNav />
      </Header>
      <main>
        {/* Selected Movie Modal  */}
        {showMovieModal && (
          <Modal onCloseModal={handleCloseModal}>
            <MovieDetails
              selected={selectedMovie}
              onAddFavorite={handleFavorite}
              favorite={favorite}
              onCloseModal={handleCloseModal}
            />
          </Modal>
        )}

        <Main movies={movies}>
          <Section
            className={`box section-movies ${isLoading ? "box-blured" : ""}`}
          >
            {isLoading && !error && <Loader />}
            {!isLoading && !error && (
              <>
                {movies?.length > 0 && <NumItem movies={movies} />}
                <MovieBox
                  movies={movies}
                  onSelectedMovie={handleSelectedMovie}
                />
              </>
            )}
            {error && <ErrorMessage message={error} />}
          </Section>
          <Section className="box section-movies-favorite">
            <FavoriteMovies>
              <FavoriteCount favorite={favorite} />
              <FavoriteMoviesList favorite={favorite} onDelete={handleDelete} />
            </FavoriteMovies>
          </Section>
        </Main>
      </main>
      <Footer />
    </div>
  );
}

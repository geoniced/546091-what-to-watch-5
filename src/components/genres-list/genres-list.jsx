import React from "react";
import PropTypes from "prop-types";
import {getFilmGenres} from "../../utils";
import {ALL_GENRES_FILTER} from "../../const";
import {FilmTypes} from "../../prop-types-validations";

const GenresList = (props) => {
  const {activeGenre, initialFilms, onGenreChange} = props;
  const genres = [ALL_GENRES_FILTER, ...getFilmGenres(initialFilms)];

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li key={`genre-${i}`}
          className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`}
          data-genre={genre}
          onClick={onGenreChange}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  films: FilmTypes.films,
  initialFilms: FilmTypes.films,
  onGenreChange: PropTypes.func.isRequired,
};

export {GenresList};
export default GenresList;

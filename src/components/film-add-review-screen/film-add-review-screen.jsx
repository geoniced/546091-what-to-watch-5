import React from "react";
import PropTypes from "prop-types";
import {FilmTypes} from "../../prop-types-validations";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import AddReviewBlock from "../add-review-block/add-review-block";

import withReviewForm from "../../hocs/with-review-form/with-review-form";
import {getFilmById} from "../../utils";

const AddReviewWithForm = withReviewForm(AddReviewBlock);

const FilmAddReviewScreen = (props) => {
  const {films, filmId} = props;

  const film = getFilmById(films, filmId);
  const {title, posterImage, backgroundImage} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <LogoBlock />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={title} width="218" height="327" />
        </div>
      </div>

      <AddReviewWithForm />

    </section>
  );
};

FilmAddReviewScreen.propTypes = {
  films: FilmTypes.films,
  filmId: PropTypes.string.isRequired,
};

export default FilmAddReviewScreen;

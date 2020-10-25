import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {FilmTypes} from "../../prop-types-validations";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";

const STARS_COUNT = 5;

const FilmAddReviewScreen = (props) => {
  const {title, poster, fullSizePoster} = props.film;
  const {ratingStars, onRatingChange, onReviewChange, onSubmit} = props;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={fullSizePoster} alt={title} />
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
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {new Array(STARS_COUNT).fill().map((_, index) => {
                const currentStarIndex = index + 1;

                return (
                  <Fragment key={`star-${currentStarIndex}`}>
                    <input
                      className="rating__input"
                      id={`star-${currentStarIndex}`}
                      type="radio"
                      name="rating"
                      value={currentStarIndex}
                      checked={currentStarIndex === ratingStars}
                      onChange={onRatingChange}
                    />
                    <label className="rating__label" htmlFor={`star-${currentStarIndex}`}>Rating {currentStarIndex}</label>
                  </Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={onReviewChange}
            ></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

FilmAddReviewScreen.propTypes = {
  film: FilmTypes.filmCard,
  ratingStars: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FilmAddReviewScreen;

import React, {Fragment, PureComponent} from "react";
import {Link} from "react-router-dom";
import {FilmTypes} from "../../prop-types-validations";
import UserBlock from "../user-block/user-block";

const STARS_COUNT = 5;

class FilmAddReviewScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingStars: 1,
      reviewText: ``,
    };

    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleReviewChange = this._handleReviewChange.bind(this);
  }

  _handleRatingChange(evt) {
    this.setState({
      ratingStars: Number(evt.target.value),
    });
  }

  _handleReviewChange(evt) {
    this.setState({
      reviewText: evt.target.value,
    });
  }

  render() {
    const {title, poster, fullSizePoster} = this.props.film;
    const {ratingStars} = this.state;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={fullSizePoster} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

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
            onSubmit={(evt) => {
              evt.preventDefault();
            }}
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
                        onChange={this._handleRatingChange}
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
                onChange={this._handleReviewChange}
              ></textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}

FilmAddReviewScreen.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmAddReviewScreen;

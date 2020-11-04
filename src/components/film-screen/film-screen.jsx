import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FilmTypes, ReviewTypes} from "../../prop-types-validations";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import FilmScreenTabs from "../film-screen-tabs/film-screen-tabs";
import FilmCardList from "../film-card-list/film-card-list";

import withSwitchableTabs from "../../hocs/with-switchable-tabs/with-switchable-tabs";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import {getFilmById} from "../../utils";

const FilmScreenWithSwitchableTabs = withSwitchableTabs(FilmScreenTabs);
const FilmCardListWithActiveItem = withActivePlayer(FilmCardList);

const SIMILIAR_FILMS_COUNT = 4;

const FilmScreen = (props) => {
  const {onPlayButtonClick, reviews, films, filmId} = props;

  const film = getFilmById(films, filmId);

  const {
    title,
    genre,
    releaseYear,
    posterImage,
    backgroundImage,
  } = film;

  const similarFilms = films
    .filter((filmItem) => filmItem.title !== film.title)
    .filter((filmItem) => filmItem.genre === film.genre)
    .slice(0, SIMILIAR_FILMS_COUNT);

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <LogoBlock />
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onPlayButtonClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to="/films/1/review" className="btn movie-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={title} width="218" height="327" />
            </div>

            <FilmScreenWithSwitchableTabs
              film={film}
              reviews={reviews}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardListWithActiveItem films={similarFilms}/>
        </section>

        <footer className="page-footer">
          <LogoBlock isFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

FilmScreen.propTypes = {
  films: FilmTypes.films,
  reviews: ReviewTypes.reviewsList,
  onPlayButtonClick: PropTypes.func.isRequired,
  filmId: PropTypes.string.isRequired,
};

export default FilmScreen;

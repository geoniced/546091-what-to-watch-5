import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FilmTypes} from "../../prop-types-validations";
import FilmCardList from "../film-card-list/film-card-list";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {changeGenre, resetShownFilmCards, increaseShownFilmCards} from "../../store/actions";
import {getActiveGenre, getShownFilmsCount, getFilmsByGenre} from "../../store/selectors";

const MainPage = (props) => {
  const {
    movieCard,
    onPlayButtonClick,
    films,
    activeGenre,
    shownFilmsCount,
    onGenreChange,
    onShowMoreButtonClick
  } = props;

  const {
    title,
    genre,
    releaseDate
  } = movieCard;

  const shownFilms = films.slice(0, shownFilmsCount);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <LogoBlock noLink/>
          <UserBlock />

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseDate}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onPlayButtonClick}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList
            activeGenre={activeGenre}
            films={films}
            onGenreChange={onGenreChange}
          />

          <FilmCardList
            films={shownFilms}
          />

          {shownFilms.length < films.length
            ? <ShowMoreButton clickHandler={onShowMoreButtonClick} />
            : null}
        </section>

        <footer className="page-footer">
          <LogoBlock isFooter noLink />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  films: FilmTypes.films,
  shownFilmsCount: PropTypes.number.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilmsByGenre(state),
  shownFilmsCount: getShownFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(evt) {
    const chosenGenre = evt.currentTarget.dataset.genre;
    dispatch(changeGenre(chosenGenre));
    dispatch(resetShownFilmCards());
  },
  onShowMoreButtonClick() {
    dispatch(increaseShownFilmCards());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

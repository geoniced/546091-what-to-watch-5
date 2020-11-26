import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {FilmTypes} from "../../prop-types-validations";
import FilmCardList from "../film-card-list/film-card-list";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import GenresList from "../genres-list/genres-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {changeGenre, resetShownFilmCards, increaseShownFilmCards} from "../../store/actions";
import {getActiveGenre, getShownFilmsCount, getFilmsByGenre, getPromoFilm} from "../../store/selectors";
import {fetchPromoFilm, submitMyListFilmStatus} from "../../store/api-actions";
import MyListButton from "../my-list-button/my-list-button";

const usePromoFilmLoader = (loadPromoFilm) => {
  useEffect(() => {
    loadPromoFilm();
  }, []);
};

const MainPage = (props) => {
  const {
    promoFilm,
    onPlayButtonClick,
    films,
    activeGenre,
    shownFilmsCount,
    onGenreChange,
    onShowMoreButtonClick,
    loadPromoFilm,
    setMyListFilmStatus,
  } = props;

  const {
    id,
    title,
    genre,
    releaseYear,
    posterImage,
    backgroundImage,
    backgroundColor,
    isFavorite,
  } = promoFilm;

  usePromoFilmLoader(loadPromoFilm);

  const onMyListButtonClick = () => {
    setMyListFilmStatus(id, Number(!isFavorite));
    loadPromoFilm();
  };

  const shownFilms = films.slice(0, shownFilmsCount);

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} style={{backgroundColor}}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <LogoBlock noLink/>
          <UserBlock />

        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={posterImage} alt={title} width="218" height="327" />
            </div>

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
                  onClick={() => {
                    onPlayButtonClick(id);
                  }}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton
                  onClick={onMyListButtonClick}
                  isFavorite={isFavorite}
                />
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
  promoFilm: FilmTypes.filmCard,
  onPlayButtonClick: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  films: FilmTypes.films,
  shownFilmsCount: PropTypes.number.isRequired,
  onGenreChange: PropTypes.func.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
  loadPromoFilm: PropTypes.func.isRequired,
  setMyListFilmStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: getActiveGenre(state),
  films: getFilmsByGenre(state),
  shownFilmsCount: getShownFilmsCount(state),
  promoFilm: getPromoFilm(state),
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
  loadPromoFilm() {
    dispatch(fetchPromoFilm());
  },
  setMyListFilmStatus(filmId, status) {
    dispatch(submitMyListFilmStatus(filmId, status));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

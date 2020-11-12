import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {FilmTypes, ReviewTypes} from "../../prop-types-validations";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import FilmAddReviewScreen from "../film-add-review-screen/film-add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import {getFilmById} from "../../utils";
import browserHistory from "../../browser-history";
import {AppRoute} from "../../const";
import {getFilms, getIsLoading} from "../../store/selectors";
import {fetchFilmList} from "../../store/api-actions";
import Preloader from "../preloader/preloader";

class App extends PureComponent {
  componentDidMount() {
    this.props.loadFilmList();
  }

  render() {
    const {movieCard, films, isLoading} = this.props;

    if (isLoading) {
      return <Preloader />;
    }

    return (
      <BrowserRouter history={browserHistory}>
        <Switch>
          <Route exact
            path={AppRoute.ROOT}
            render={({history}) => (
              <MainPage
                movieCard={movieCard}
                onPlayButtonClick={() => history.push(`${AppRoute.PLAYER}/1`)}
              />
            )}
          />
          <Route path={AppRoute.LOGIN} exact>
            <AuthScreen />
          </Route>
          <PrivateRoute
            path={AppRoute.MY_LIST}
            exact
            render={() => (
              <MyListScreen />
            )}
          />
          <Route exact
            path={`${AppRoute.FILMS}/:id`}
            render={
              ({history, match}) => {
                const filmId = match.params.id;
                const film = getFilmById(films, filmId);

                return (
                  <FilmScreen
                    film={film}
                    films={films}
                    onPlayButtonClick={() => history.push(`${AppRoute.PLAYER}/${filmId}`)}
                  />
                );
              }
            }
          />
          <PrivateRoute exact
            path={`${AppRoute.FILMS}/:id/review`}
            render={
              ({match}) => {
                const filmId = match.params.id;
                const film = getFilmById(films, filmId);

                return (
                  <FilmAddReviewScreen
                    film={film}
                  />
                );
              }
            }
          />
          <Route exact
            path={`${AppRoute.PLAYER}/:id`}
            render={
              ({history, match}) => {
                const filmId = match.params.id;
                const film = getFilmById(films, filmId);

                return (
                  <PlayerScreen
                    film={film}
                    onExitButtonClick={() => history.push(AppRoute.ROOT)}
                  />
                );
              }
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: FilmTypes.films,
  loadFilmList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFilmList() {
    dispatch(fetchFilmList());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

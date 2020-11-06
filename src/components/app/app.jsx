import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {FilmTypes, ReviewTypes} from "../../prop-types-validations";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import FilmAddReviewScreen from "../film-add-review-screen/film-add-review-screen";
import PlayerScreen from "../player-screen/player-screen";
import PrivateRoute from "../private-route/private-route";
import {connect} from "react-redux";
import {getFilmById} from "../../utils";

const App = (props) => {
  const {movieCard, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          render={({history}) => (
            <MainPage
              movieCard={movieCard}
              onPlayButtonClick={() => history.push(`/player/1`)}
            />
          )}
        />
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <PrivateRoute
          path={`/mylist`}
          exact
          render={() => (
            <MyListScreen />
          )}
        />
        <Route exact
          path="/films/:id"
          render={
            ({history, match}) => {
              const filmId = match.params.id;
              const film = getFilmById(films, filmId);

              return (
                <FilmScreen
                  film={film}
                  films={films}
                  reviews={reviews}
                  onPlayButtonClick={() => history.push(`/player/${filmId}`)}
                />
              );
            }
          }
        />
        <PrivateRoute exact
          path="/films/:id/review"
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
          path="/player/:id"
          render={
            ({history, match}) => {
              const filmId = match.params.id;
              const film = getFilmById(films, filmId);

              return (
                <PlayerScreen
                  film={film}
                  onExitButtonClick={() => history.push(`/`)}
                />
              );
            }
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieCard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
  }).isRequired,
  films: FilmTypes.films,
  reviews: ReviewTypes.reviewsList,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
});

export {App};
export default connect(mapStateToProps)(App);

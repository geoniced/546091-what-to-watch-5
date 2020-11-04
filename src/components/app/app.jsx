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
import {connect} from "react-redux";

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
              onPlayButtonClick={() => history.push(`/player/0`)}
            />
          )}
        />
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/mylist" exact>
          <MyListScreen
            films={films}
          />
        </Route>
        <Route exact
          path="/films/:id"
          render={({history, match}) => (
            <FilmScreen
              filmId={match.params.id}
              reviews={reviews}
              films={films}
              onPlayButtonClick={() => history.push(`/player/${match.params.id}`)}
            />
          )}
        />
        <Route exact
          path="/films/:id/review"
          render={({match}) => (
            <FilmAddReviewScreen
              filmId={match.params.id}
              films={films}
            />
          )}
        />
        <Route exact
          path="/player/:id"
          render={({history, match}) => (
            <PlayerScreen
              filmId={match.params.id}
              films={films}
              onExitButtonClick={() => history.push(`/`)}
            />
          )}
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
// temporary
export default connect(mapStateToProps)(App);

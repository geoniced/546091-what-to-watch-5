import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import FilmAddReviewScreen from "../film-add-review-screen/film-add-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = (props) => {
  const {movieCard, films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            movieCard={movieCard}
            films={films}
          />
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/mylist" exact>
          <MyListScreen
            films={films}
          />
        </Route>
        <Route path="/films/:id" exact>
          <FilmScreen
            film={films[1]}
          />
        </Route>
        <Route path="/films/:id/review" exact>
          <FilmAddReviewScreen
            film={films[0]}
          />
        </Route>
        <Route path="/player/:id" exact>
          <PlayerScreen />
        </Route>
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
  films: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default App;

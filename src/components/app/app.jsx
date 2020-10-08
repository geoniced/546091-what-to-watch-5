import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import AuthScreen from "../auth-screen/auth-screen";
import MyListScreen from "../my-list-screen/my-list-screen";
import FilmScreen from "../film-screen/film-screen";
import FilmReviewScreen from "../film-review-screen/film-review-screen";
import PlayerScreen from "../player-screen/player-screen";

const App = (props) => {
  const {movieCard} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage movieCard={movieCard}/>
        </Route>
        <Route path="/login" exact>
          <AuthScreen />
        </Route>
        <Route path="/mylist" exact>
          <MyListScreen />
        </Route>
        <Route path="/films/:id" exact>
          <FilmScreen />
        </Route>
        <Route path="/films/:id/review" exact>
          <FilmReviewScreen />
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

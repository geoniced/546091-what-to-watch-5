import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {movieCard} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage movieCard={movieCard}/>
        </Route>
        <Route path="/login" exact>

        </Route>
        <Route path="/mylist" exact>

        </Route>
        <Route path="/films/:id" exact>

        </Route>
        <Route path="/films/:id/review" exact>

        </Route>
        <Route path="/player/:id" exact>

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
  }).isRequired
};

export default App;

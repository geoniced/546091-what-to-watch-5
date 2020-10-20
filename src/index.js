import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import {reducer} from "./store/reducer";

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        movieCard={movieCard}
        films={films}
        reviews={reviews}
      />
    </Provider>,
    document.querySelector(`#root`)
);

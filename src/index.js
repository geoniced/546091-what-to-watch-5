import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import rootReducer from "./store/reducers/root-reducer";
import {createAPI} from "./services/api";
import {fetchFilmList} from "./store/api-actions";

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

const api = createAPI(
    // сюда передать коллбек при unauthorized
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

Promise.all([
  store.dispatch(fetchFilmList())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          movieCard={movieCard}
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});

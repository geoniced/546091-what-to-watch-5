import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockedStore} from "../../test-data/store";
import {filmListMock} from "../../test-data/test-data";
import FilmAddReviewScreen from "./film-add-review-screen";

const filmMock = filmListMock[0];

it(`renders FilmAddReviewScreen component`, () => {
  const tree = renderer
    .create(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <FilmAddReviewScreen
              film={filmMock}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

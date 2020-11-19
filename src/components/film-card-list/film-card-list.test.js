import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {filmListMock, noop} from "../../test-data/test-data";
import FilmCardList from "./film-card-list";

it(`renders FilmCardList component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmCardList
            films={filmListMock}
            renderPlayer={noop}
            mouseOverHandler={noop}
            mouseLeaveHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

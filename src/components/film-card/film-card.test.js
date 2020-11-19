import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {filmListMock, noop} from "../../test-data/test-data";
import FilmCard from "./film-card";

const filmMock = filmListMock[0];

it(`renders FilmCard component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FilmCard
            film={filmMock}
            filmId={1}
            renderPlayer={noop}
            mouseOverHandler={noop}
            mouseLeaveHandler={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import {filmListMock} from "../../test-data/test-data";
import FilmCardDetailsTab from "./film-card-details-tab";

describe(`FilmCardDetailsTab render`, () => {
  it(`renders FilmCardDetailsTab component with the first mock data piece`, () => {
    const tree = renderer
      .create(
          <FilmCardDetailsTab
            film={filmListMock[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmCardDetailsTab component with another data`, () => {
    const tree = renderer
      .create(
          <FilmCardDetailsTab
            film={filmListMock[5]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});



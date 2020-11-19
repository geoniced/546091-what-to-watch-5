import React from "react";
import renderer from "react-test-renderer";
import {filmListMock} from "../../test-data/test-data";
import FilmCardOverviewTab from "./film-card-overview-tab";

describe(`FilmCardOverviewTab render`, () => {
  it(`renders FilmCardOverviewTab component with the first mock data piece`, () => {
    const tree = renderer
      .create(
          <FilmCardOverviewTab
            film={filmListMock[0]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmCardOverviewTab component with another data`, () => {
    const tree = renderer
      .create(
          <FilmCardOverviewTab
            film={filmListMock[5]}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


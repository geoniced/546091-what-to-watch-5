import React from "react";
import renderer from "react-test-renderer";
import {Tab} from "../../const";
import {filmListMock, mockReviews, noop} from "../../test-data/test-data";
import FilmScreenTabs from "./film-screen-tabs";

describe(`FilmScreenTabs render`, () => {
  it(`renders FilmScreenTabs component with currentTab eq OVERVIEW`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabs
            currentTab={Tab.OVERVIEW}
            film={filmListMock[0]}
            reviews={mockReviews}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


import React from "react";
import renderer from "react-test-renderer";
import {Tab} from "../../const";
import {noop} from "../../test-data/test-data";
import {FilmScreenTabItem} from "./film-screen-tab-item";

describe(`FilmScreenTabItem render`, () => {
  it(`renders FilmScreenTabItem component with active status and Details type`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabItem
            isActive={true}
            type={Tab.DETAILS}
            title={`Details`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmScreenTabItem component without active status and Details type`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabItem
            isActive={false}
            type={Tab.DETAILS}
            title={`Details`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmScreenTabItem component without active status and Overview type`, () => {
    const tree = renderer
      .create(
          <FilmScreenTabItem
            isActive={false}
            type={Tab.OVERVIEW}
            title={`Overview`}
            onTabClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {filmListMock} from "../../test-data/test-data";
import App, {App as AppWithoutStore} from "./app";
import {noop} from "../../test-data/test-data";
import {mockedStore} from "../../test-data/store";

describe(`App render without store`, () => {
  it(`renders App component's preloader (no store here)`, () => {
    const tree = renderer
      .create(
          <AppWithoutStore
            promoFilm={filmListMock[0]}
            films={[]}
            isLoading={true}
            loadFilmList={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe(`App render`, () => {
  let appComponent = null;

  it(`renders App component`, () => {
    appComponent = renderer.create(
        <Provider store={mockedStore}>
          <App
            promoFilm={filmListMock[0]}
            isLoading={false}
            films={[]}
            loadFilmList={noop}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    );

    expect(appComponent.toJSON()).toMatchSnapshot();
  });
});

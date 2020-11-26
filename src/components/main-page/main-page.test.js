import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockedStore} from "../../test-data/store";
import {createNodeMockWithVideo, filmListMock, noop} from "../../test-data/test-data";
import {MainPage} from "./main-page";

describe(`MainPage render`, () => {
  it(`renders MainPage component with active genre eq Action`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MainPage
                promoFilm={filmListMock[0]}
                activeGenre={`Action`}
                films={filmListMock}
                shownFilmsCount={8}
                onPlayButtonClick={noop}
                onGenreChange={noop}
                onShowMoreButtonClick={noop}
                loadPromoFilm={noop}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: createNodeMockWithVideo,
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MainPage component with active genre eq All genres and shownFilms eq 16`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MainPage
                promoFilm={filmListMock[0]}
                activeGenre={`All genres`}
                films={filmListMock}
                shownFilmsCount={16}
                onPlayButtonClick={noop}
                onGenreChange={noop}
                onShowMoreButtonClick={noop}
                loadPromoFilm={noop}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: createNodeMockWithVideo,
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

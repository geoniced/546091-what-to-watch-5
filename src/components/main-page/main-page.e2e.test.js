import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainPage} from "./main-page";
import {filmListMock, movieCard, noop} from "../../test-data/test-data";
import {mockedStore} from "../../test-data/store";

configure({adapter: new Adapter()});

describe(`MainPage interactions`, () => {
  it(`should MainPage be able to press on Play button`, () => {
    const handlePlayButtonClick = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <MainPage
              onPlayButtonClick={handlePlayButtonClick}
              movieCard={movieCard}
              activeGenre={`All genres`}
              films={filmListMock}
              shownFilmsCount={8}
              onGenreChange={noop}
              onShowMoreButtonClick={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    const playButtonClick = wrapper.find(`.movie-card__buttons .btn--play`);
    playButtonClick.simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`should MainPage be able to press on Genre item`, () => {
    const handleGenreChange = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <MainPage
              onGenreChange={handleGenreChange}
              movieCard={movieCard}
              activeGenre={`All genres`}
              films={filmListMock}
              shownFilmsCount={8}
              onShowMoreButtonClick={noop}
              onPlayButtonClick={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    const genreItem = wrapper.find(`.catalog__genres-item`).at(1);
    genreItem.simulate(`click`);
    expect(handleGenreChange).toHaveBeenCalledTimes(1);
  });

  it(`should MainPage be able to press on Show More Button`, () => {
    const handleShowMoreButtonClick = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <MainPage
              onShowMoreButtonClick={handleShowMoreButtonClick}
              movieCard={movieCard}
              activeGenre={`All genres`}
              films={filmListMock}
              shownFilmsCount={8}
              onPlayButtonClick={noop}
              onGenreChange={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    const showMoreButton = wrapper.find(`.catalog__more .catalog__button`);
    showMoreButton.simulate(`click`);
    expect(handleShowMoreButtonClick).toHaveBeenCalledTimes(1);
  });
});

// TODO: Warnings

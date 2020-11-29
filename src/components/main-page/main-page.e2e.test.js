import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MainPage} from "./main-page";
import {filmListMock, noop} from "../../test-data/test-data";
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
              promoFilm={filmListMock[0]}
              activeGenre={`All genres`}
              filmsByGenre={filmListMock}
              allFilms={filmListMock}
              shownFilmsCount={8}
              onGenreChange={noop}
              onShowMoreButtonClick={noop}
              loadPromoFilm={noop}
              setMyListPromoFilmStatus={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    const playButtonClick = wrapper.find(`.movie-card__buttons .btn--play`);
    playButtonClick.simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`should MainPage be able to add promo film in MyList`, () => {
    const handleSetMyListStatus = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <MainPage
              onPlayButtonClick={noop}
              promoFilm={filmListMock[0]}
              activeGenre={`All genres`}
              filmsByGenre={filmListMock}
              allFilms={filmListMock}
              shownFilmsCount={8}
              onGenreChange={noop}
              onShowMoreButtonClick={noop}
              loadPromoFilm={noop}
              setMyListPromoFilmStatus={handleSetMyListStatus}
            />
          </BrowserRouter>
        </Provider>
    );

    const setMyListStatusButton = wrapper.find(`.movie-card__buttons .btn--list`);
    setMyListStatusButton.simulate(`click`);
    expect(handleSetMyListStatus).toHaveBeenCalledTimes(1);
  });

  it(`should MainPage be able to press on Show More Button`, () => {
    const handleShowMoreButtonClick = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <MainPage
              onShowMoreButtonClick={handleShowMoreButtonClick}
              promoFilm={filmListMock[0]}
              activeGenre={`All genres`}
              filmsByGenre={filmListMock}
              allFilms={filmListMock}
              shownFilmsCount={8}
              onPlayButtonClick={noop}
              onGenreChange={noop}
              loadPromoFilm={noop}
              setMyListPromoFilmStatus={noop}
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

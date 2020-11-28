import React from "react";
import {BrowserRouter} from "react-router-dom";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {filmListMock, noop} from "../../test-data/test-data";
import {FilmScreen} from "./film-screen";
import {AuthorizationStatus} from "../../const";
import {Provider} from "react-redux";
import {mockedStore} from "../../test-data/store";

configure({adapter: new Adapter()});

describe(`FilmScreen interactions`, () => {
  it(`should FilmScreen be able to press play button`, () => {
    const handlePlayButtonClick = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <FilmScreen
              onPlayButtonClick={handlePlayButtonClick}
              films={filmListMock}
              film={filmListMock[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
              reviews={[]}
              loadReviews={noop}
              setMyListFilmStatus={noop}
            />
          </BrowserRouter>
        </Provider>
    );

    const playButton = wrapper.find(`.movie-card__buttons .btn--play`);
    playButton.simulate(`click`);
    expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
  });

  it(`should FilmScreen be able to set a film as favorite`, () => {
    const handleSetMyListStatus = jest.fn();

    const wrapper = mount(
        <Provider store={mockedStore}>
          <BrowserRouter>
            <FilmScreen
              onPlayButtonClick={noop}
              films={filmListMock}
              film={filmListMock[0]}
              authorizationStatus={AuthorizationStatus.AUTH}
              reviews={[]}
              loadReviews={noop}
              setMyListFilmStatus={handleSetMyListStatus}
            />
          </BrowserRouter>
        </Provider>
    );

    const setMyListStatusButton = wrapper.find(`.movie-card__buttons .btn--list`);
    setMyListStatusButton.simulate(`click`);
    expect(handleSetMyListStatus).toHaveBeenCalledTimes(1);
  });
});

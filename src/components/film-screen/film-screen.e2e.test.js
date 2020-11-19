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
          />
        </BrowserRouter>
      </Provider>
  );

  const playButton = wrapper.find(`.movie-card__buttons .btn--play`);
  playButton.simulate(`click`);
  expect(handlePlayButtonClick).toHaveBeenCalledTimes(1);
});

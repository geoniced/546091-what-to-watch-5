import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {filmListMock, noop} from "../../test-data/test-data";
import FilmCardList from "./film-card-list";
import {BrowserRouter} from "react-router-dom";

configure({adapter: new Adapter()});

it(`should FilmCardList cards be able to have mouseover and mouseleave actions`, () => {
  const handleMouseOver = jest.fn();
  const handleMouseLeave = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <FilmCardList
          films={filmListMock}
          mouseOverHandler={handleMouseOver}
          mouseLeaveHandler={handleMouseLeave}
          renderPlayer={noop}
        />
      </BrowserRouter>
  );

  const filmCard = wrapper.find(`.catalog__movies-card`).at(1);
  filmCard.simulate(`mouseover`);
  expect(handleMouseOver).toHaveBeenCalledTimes(1);

  filmCard.simulate(`mouseleave`);
  expect(handleMouseLeave).toHaveBeenCalledTimes(1);
});

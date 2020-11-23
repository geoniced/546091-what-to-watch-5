import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";
import {filmListMock, noop} from "../../test-data/test-data";

configure({adapter: new Adapter()});

const filmMock = filmListMock[0];

it(`should FilmCard be able to have mouseover and mouseleave actions`, () => {
  const handleMouseOver = jest.fn();
  const handleMouseLeave = jest.fn();

  const wrapper = shallow(
      <FilmCard
        film={filmMock}
        filmId={filmMock.id}
        mouseOverHandler={handleMouseOver}
        mouseLeaveHandler={handleMouseLeave}
        renderPlayer={noop}
      />
  );

  const filmCard = wrapper.find(`.catalog__movies-card`);
  filmCard.simulate(`mouseover`);
  expect(handleMouseOver).toHaveBeenCalledTimes(1);

  filmCard.simulate(`mouseleave`);
  expect(handleMouseLeave).toHaveBeenCalledTimes(1);
});

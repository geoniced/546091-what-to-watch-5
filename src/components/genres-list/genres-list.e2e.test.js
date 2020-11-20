import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GenresList from "./genres-list";
import {filmListMock} from "../../test-data/test-data";

configure({adapter: new Adapter()});

it(`should GenresList be able to press on Genre item`, () => {
  const handleGenreChange = jest.fn();

  const wrapper = mount(
      <GenresList
        onGenreChange={handleGenreChange}
        activeGenre={`All genres`}
        films={filmListMock}
      />
  );

  const genreItem = wrapper.find(`.catalog__genres-item[data-genre="Action"]`);
  genreItem.simulate(`click`);
  expect(handleGenreChange).toHaveBeenCalledTimes(1);
});

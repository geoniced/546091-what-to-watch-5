import React from "react";
import renderer from "react-test-renderer";
import {filmListMock, noop} from "../../test-data";
import GenresList from "./genres-list";

describe(`GenresList render`, () => {
  it(`renders GenresList component with activeGenre eq All genres`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`All genres`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GenresList component with activeGenre eq Action`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`Action`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders GenresList component with activeGenre eq Crime`, () => {
    const tree = renderer
      .create(
          <GenresList
            activeGenre={`Crime`}
            films={filmListMock}
            onGenreChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

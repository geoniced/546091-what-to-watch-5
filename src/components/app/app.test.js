import React from "react";
import renderer from "react-test-renderer";
import {movieCard} from "../../test-data";
import {App} from "./app";
import {noop} from "../../test-data";

describe(`App render`, () => {
  // TODO: CONNECT TO STORE
  // it(`renders App component`, () => {
  //   const tree = renderer
  //     .create(
  //         <App
  //           movieCard={movieCard}
  //           films={[]}
  //           isLoading={false}
  //           loadFilmList={noop}
  //         />
  //     )
  //     .toJSON();

  //   expect(tree).toMatchSnapshot();
  // });

  it(`renders App component's preloader`, () => {
    const tree = renderer
      .create(
          <App
            movieCard={movieCard}
            films={[]}
            isLoading={true}
            loadFilmList={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

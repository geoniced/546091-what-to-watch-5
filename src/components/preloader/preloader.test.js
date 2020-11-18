import React from "react";
import renderer from "react-test-renderer";
import Preloader from "./preloader";

it(`renders Preloader component`, () => {
  const tree = renderer
    .create(
        <Preloader />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

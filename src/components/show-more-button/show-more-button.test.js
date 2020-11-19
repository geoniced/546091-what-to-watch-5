import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-data/test-data";
import ShowMoreButton from "./show-more-button";

it(`renders ShowMoreButton component`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          clickHandler={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

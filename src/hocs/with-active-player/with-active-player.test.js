import React from "react";
import renderer from "react-test-renderer";
import {MockComponent} from "../../test-data";
import withActivePlayer from "./with-active-player";

const MockComponentWrapped = withActivePlayer(MockComponent);

it(`renders withActivePlayer HOC correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

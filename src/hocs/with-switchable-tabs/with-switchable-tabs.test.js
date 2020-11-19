import React from "react";
import renderer from "react-test-renderer";
import {MockComponent} from "../../test-data";
import withSwitchableTabs from "./with-switchable-tabs";

const MockComponentWrapped = withSwitchableTabs(MockComponent);

it(`renders withSwitchableTabs HOC`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

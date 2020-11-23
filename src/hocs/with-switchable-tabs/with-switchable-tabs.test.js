import React from "react";
import renderer from "react-test-renderer";
import {MockComponentWithChildren} from "../../test-data/components";
import withSwitchableTabs from "./with-switchable-tabs";

const MockComponentWrapped = withSwitchableTabs(MockComponentWithChildren);

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

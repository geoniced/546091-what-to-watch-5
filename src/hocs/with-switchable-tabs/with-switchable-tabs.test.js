import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withSwitchableTabs from "./with-switchable-tabs";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

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

import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withReviewForm from "./with-review-form";

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

const MockComponentWrapped = withReviewForm(MockComponent);

it(`renders withReviewForm HOC`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped filmId={1}>
          <React.Fragment />
        </MockComponentWrapped>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

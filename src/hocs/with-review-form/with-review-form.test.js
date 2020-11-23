import React from "react";
import renderer from "react-test-renderer";
import {MockComponentWithChildren} from "../../test-data/components";
import withReviewForm from "./with-review-form";

const MockComponentWrapped = withReviewForm(MockComponentWithChildren);

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

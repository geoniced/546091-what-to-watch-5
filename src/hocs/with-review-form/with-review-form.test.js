import React from "react";
import renderer from "react-test-renderer";
import {MockComponent} from "../../test-data/test-data";
import withReviewForm from "./with-review-form";

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

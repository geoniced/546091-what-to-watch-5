import React from "react";
import renderer from "react-test-renderer";
import {AddReviewRatingStar} from "./add-review-rating-star";
import {noop} from "../../test-data";

describe(`AddReviewRatingStar render`, () => {
  it(`renders AddReviewRatingStar component in checked state`, () => {
    const tree = renderer
      .create(
          <AddReviewRatingStar
            checked={true}
            starIndex={1}
            onRatingChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders AddReviewRatingStar component in unchecked state`, () => {
    const tree = renderer
      .create(
          <AddReviewRatingStar
            checked={false}
            starIndex={1}
            onRatingChange={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

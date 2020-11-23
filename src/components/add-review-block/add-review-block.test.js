import React from "react";
import renderer from "react-test-renderer";
import {AddReviewBlock} from "./add-review-block";
import {noop} from "../../test-data/test-data";

describe(`AddReviewBlock render`, () => {
  it(`renders AddReviewBlock component with 5 stars and no text`, () => {
    const tree = renderer
      .create(
          <AddReviewBlock
            ratingStars={5}
            reviewText={``}
            filmId={0}
            onRatingChange={noop}
            onReviewChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders AddReviewBlock component with 0 stars and some text`, () => {
    const tree = renderer
      .create(
          <AddReviewBlock
            ratingStars={0}
            reviewText={`nice movie`}
            filmId={0}
            onRatingChange={noop}
            onReviewChange={noop}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

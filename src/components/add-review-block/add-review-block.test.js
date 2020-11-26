import React from "react";
import renderer from "react-test-renderer";
import {AddReviewBlock} from "./add-review-block";
import {noop} from "../../test-data/test-data";

describe(`AddReviewBlock render`, () => {
  it(`renders AddReviewBlock component with 0 stars and some text`, () => {
    const tree = renderer
      .create(
          <AddReviewBlock
            filmId={0}
            onSubmit={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

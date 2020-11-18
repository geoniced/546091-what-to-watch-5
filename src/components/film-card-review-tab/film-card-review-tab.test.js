import React from "react";
import renderer from "react-test-renderer";
import {mockReviews} from "../../test-data";
import FilmCardReviewTab from "./film-card-review-tab";

describe(`FilmCardReviewTab render`, () => {
  it(`renders FilmCardReviewTab component with the first mock data piece`, () => {
    const tree = renderer
      .create(
          <FilmCardReviewTab
            reviews={mockReviews.slice(0, 2)}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmCardReviewTab component with another data`, () => {
    const tree = renderer
      .create(
          <FilmCardReviewTab
            reviews={mockReviews.slice(3)}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


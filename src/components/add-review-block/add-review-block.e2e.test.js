import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewBlock} from "./add-review-block";
import {noop} from "../../test-data";

configure({adapter: new Adapter()});

describe(`AddReviewBlock interactions work correctly`, () => {
  it(`should AddReviewBlock text in textarea change`, () => {
    const handleReviewChange = jest.fn();

    const wrapper = shallow(
        <AddReviewBlock
          ratingStars={5}
          reviewText={``}
          filmId={0}
          onRatingChange={noop}
          onReviewChange={handleReviewChange}
          onSubmit={noop}
        />
    );

    const reviewTextArea = wrapper.find(`.add-review__textarea`);
    reviewTextArea.simulate(`change`);
    expect(handleReviewChange).toHaveBeenCalledTimes(1);
  });

  it(`should AddReviewBlock ratingStars be able to clicked/changed`, () => {
    const handleRatingChange = jest.fn();

    const wrapper = mount(
        <AddReviewBlock
          ratingStars={5}
          reviewText={``}
          filmId={0}
          onRatingChange={handleRatingChange}
          onReviewChange={noop}
          onSubmit={noop}
        />
    );

    const ratingStars = wrapper.find(`.rating__input`);
    const thirdStar = ratingStars.at(2);
    thirdStar.simulate(`change`);
    expect(handleRatingChange).toHaveBeenCalledTimes(1);
    // HOC changed state test
  });
});


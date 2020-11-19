import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewRatingStar} from "./add-review-rating-star";

configure({adapter: new Adapter()});

it(`should AddReviewRatingStar be clickable`, () => {
  const handleRatingChange = jest.fn();

  const wrapper = shallow(
      <AddReviewRatingStar
        starIndex={1}
        checked={true}
        onRatingChange={handleRatingChange}
      />
  );

  const ratingInput = wrapper.find(`.rating__input`);
  ratingInput.simulate(`change`);
  expect(handleRatingChange).toHaveBeenCalledTimes(1);
  // HOC changed state test
});

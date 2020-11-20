import React from "react";
import PropTypes from "prop-types";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withReviewForm from "./with-review-form";

configure({adapter: new Adapter()});

const MockComponent = () => {
  return (
    <div />
  );
};

MockComponent.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
};

const MockComponentWrapped = withReviewForm(MockComponent);

describe(`withReviewForm interactions`, () => {
  it(`should withReviewForm has its default state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    expect(wrapper.state().ratingStars).toEqual(1);
    expect(wrapper.state().reviewText).toEqual(``);
  });

  it(`should change rating stars`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    wrapper.props().onRatingChange({target: {value: 3}});
    expect(wrapper.state().ratingStars).toEqual(3);

    wrapper.props().onRatingChange({target: {value: 5}});
    expect(wrapper.state().ratingStars).toEqual(5);

    wrapper.props().onRatingChange({target: {value: 1}});
    expect(wrapper.state().ratingStars).toEqual(1);
  });

  it(`should change review text`, () => {
    const wrapper = shallow(
        <MockComponentWrapped filmId={1}/>
    );

    wrapper.props().onReviewChange({target: {value: `nice movie`}});
    expect(wrapper.state().reviewText).toEqual(`nice movie`);

    wrapper.props().onReviewChange({target: {value: `101010101010`}});
    expect(wrapper.state().reviewText).toEqual(`101010101010`);
  });
});


// TODO: Warnings

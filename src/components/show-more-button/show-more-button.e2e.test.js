import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMoreButton from "./show-more-button";

configure({adapter: new Adapter()});

it(`should ShowMoreButton be able to be pressed`, () => {
  const handleButtonClick = jest.fn();

  const wrapper = mount(
      <ShowMoreButton
        clickHandler={handleButtonClick}
      />
  );

  const button = wrapper.find(`.catalog__button`);
  button.simulate(`click`);
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});

import React from "react";
import renderer from "react-test-renderer";
import FormErrorBlock from "./form-error-block";

describe(`FormErrorBlock render`, () => {
  it(`renders FormErrorBlock component when there is no error`, () => {
    const formErrorsMock = {};

    const tree = renderer
      .create(
          <FormErrorBlock error={formErrorsMock.someError}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FormErrorBlock component when there is error`, () => {
    const formErrorsMock = {
      someError: `There is an error`,
    };

    const tree = renderer
      .create(
          <FormErrorBlock error={formErrorsMock.someError}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

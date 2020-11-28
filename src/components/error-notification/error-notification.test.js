import React from "react";
import renderer from "react-test-renderer";
import {noop} from "../../test-data/test-data";
import {ErrorNotification} from "./error-notification";

describe(`ErrorNotification render`, () => {
  it(`renders ErrorNotification component when there is an error`, () => {
    const tree = renderer
      .create(
          <ErrorNotification
            error={{text: `i am an error`}}
            setErrorAction={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders ErrorNotification component when there is no error`, () => {
    const tree = renderer
      .create(
          <ErrorNotification
            error={null}
            setErrorAction={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

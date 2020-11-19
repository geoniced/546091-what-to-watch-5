import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import SignInButton from "./sign-in-button";

it(`renders SignInButton component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <SignInButton />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

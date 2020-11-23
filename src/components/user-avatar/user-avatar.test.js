import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import UserAvatar from "./user-avatar";

it(`renders UserAvatar component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <UserAvatar />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

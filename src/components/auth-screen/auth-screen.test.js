import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {noop} from "../../test-data/test-data";
import {AuthScreen} from "./auth-screen";

it(`renders AuthScreen component`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <AuthScreen
            onSubmit={noop}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


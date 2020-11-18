import React from "react";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import LogoBlock from "./logo-block";

describe(`LogoBlock render`, () => {
  it(`renders LogoBlock component in footer and without link`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <LogoBlock
              isFooter
              noLink
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders LogoBlock component in footer and with link`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <LogoBlock
              isFooter
            />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders LogoBlock component not in footer and without link`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <LogoBlock
              noLink
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders LogoBlock component not in footer and with link`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <LogoBlock />
          </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

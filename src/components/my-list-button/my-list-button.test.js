import React from "react";
import renderer from "react-test-renderer";
import MyListButton from "./my-list-button";
import {noop} from "../../test-data/test-data";


describe(`MyListButton render`, () => {
  it(`renders MyListButton component when it is already in MyList`, () => {
    const tree = renderer
      .create(
          <MyListButton
            isFavorite={true}
            onClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MyListButton component when it is not in MyList`, () => {
    const tree = renderer
      .create(
          <MyListButton
            isFavorite={false}
            onClick={noop}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

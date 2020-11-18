import React from "react";
import renderer from "react-test-renderer";
import {filmListMock, noop} from "../../test-data";
import PlayerScreen from "./player-screen";

describe(`PlayerScreen render`, () => {
  it(`renders PlayerScreen component with the first film`, () => {
    const tree = renderer
      .create(
          <PlayerScreen
            film={filmListMock[0]}
            onExitButtonClick={noop}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders PlayerScreen component with the fifth film`, () => {
    const tree = renderer
      .create(
          <PlayerScreen
            film={filmListMock[5]}
            onExitButtonClick={noop}
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


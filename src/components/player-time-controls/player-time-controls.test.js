import React from "react";
import renderer from "react-test-renderer";
import PlayerTimeControls from "./player-time-controls";

describe(`PlayerTimeControls render`, () => {
  it(`renders PlayerTimeControls component with runtime eq 100 and currentTimeSeconds eq 3000`, () => {
    const tree = renderer
      .create(
          <PlayerTimeControls
            runtime={100}
            currentTimeSeconds={3000}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders PlayerTimeControls component with runtime eq 100 and currentTime eq 0`, () => {
    const tree = renderer
      .create(
          <PlayerTimeControls
            runtime={100}
            currentTimeSeconds={100}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders PlayerTimeControls component with runtime eq 100 and currentTime eq 6000`, () => {
    const tree = renderer
      .create(
          <PlayerTimeControls
            runtime={100}
            currentTimeSeconds={6000}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});


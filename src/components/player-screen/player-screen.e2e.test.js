import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlayerScreen from "./player-screen";
import {filmListMock} from "../../test-data/test-data";

configure({adapter: new Adapter()});

it(`should PlayerScreen be able to press on Exit button`, () => {
  const handleExitButtonClick = jest.fn();

  const wrapper = mount(
      <PlayerScreen
        onExitButtonClick={handleExitButtonClick}
        film={filmListMock[0]}
      />
  );

  const exitButton = wrapper.find(`.player__exit`);
  exitButton.simulate(`click`);
  expect(handleExitButtonClick).toHaveBeenCalledTimes(1);
});

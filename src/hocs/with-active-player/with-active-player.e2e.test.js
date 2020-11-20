import React from "react";
import PropTypes from "prop-types";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActivePlayer from "./with-active-player";
import {filmListMock} from "../../test-data/test-data";

configure({adapter: new Adapter()});

const {previewImage, videoPreview} = filmListMock[0];

const mockVideoPlayerSettings = {
  previewImage,
  videoPreview,
  width: 280,
  height: 175,
  filmId: 1,
};

const MockComponent = (props) => {
  const {mouseOverHandler, mouseLeaveHandler, renderPlayer} = props;
  return (
    <div
      onMouseOver={() => {
        mouseOverHandler(mockVideoPlayerSettings.filmId);
      }}
      onMouseLeave={mouseLeaveHandler}
    >
      {renderPlayer(mockVideoPlayerSettings)}
    </div>
  );
};

MockComponent.propTypes = {
  mouseOverHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  renderPlayer: PropTypes.func.isRequired,
};

const MockComponentWrapped = withActivePlayer(MockComponent);

// describe
// it default state
// it mouseover-mouseleave state change

describe(`withActivePlayer interactions`, () => {
  it(`should withActivePlayer has its default state eq to -1`, () => {
    const wrapper = mount(
        <MockComponentWrapped />
    );

    expect(wrapper.state().activeItem).toEqual(-1);

  });

  // it(`should withActivePlayer has changes in its state when user hovers and leaves the element`, () => {
  //   const wrapper = mount(
  //       <MockComponentWrapped />
  //   );

  //   const videoElement = wrapper.find(`div`);
  //   videoElement.simulate(`mouseover`);
  //   setTimeout(() => {
  //     expect(wrapper.state().activeItem).toEqual(111);

  //     videoElement.simulate(`mouseleave`);
  //     expect(wrapper.state().activeItem).toEqual(-1);
  //   }, 1000);
  // });
});


// TODO: Warnings

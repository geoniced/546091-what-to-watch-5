import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withSwitchableTabs from "./with-switchable-tabs";
import {Tab} from "../../const";
import {noop} from "../../test-data/test-data";

configure({adapter: new Adapter()});

const MockComponent = () => {
  return (
    <div />
  );
};

const MockComponentWrapped = withSwitchableTabs(MockComponent);

describe(`withSwitchableTabs interactions`, () => {
  it(`should withSwitchableTabs has its default state`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    expect(wrapper.state().currentTab).toEqual(Tab.OVERVIEW);
  });

  it(`should change tabs`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    const mockedEvent = {
      currentTarget: {
        dataset: {
          tabType: Tab.DETAILS,
        }
      },
      preventDefault: noop,
    };

    wrapper.props().onTabClick(mockedEvent);
    expect(wrapper.state().currentTab).toEqual(Tab.DETAILS);

    mockedEvent.currentTarget.dataset.tabType = Tab.REVIEWS;
    wrapper.props().onTabClick(mockedEvent);
    expect(wrapper.state().currentTab).toEqual(Tab.REVIEWS);
  });
});


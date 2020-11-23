import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Tab} from "../../const";
import {FilmScreenTabItem} from "./film-screen-tab-item";

configure({adapter: new Adapter()});

it(`should FilmScreenTabItem be able to press on Tab item`, () => {
  const handleTabClick = jest.fn();

  const wrapper = mount(
      <FilmScreenTabItem
        onTabClick={handleTabClick}
        isActive
        type={Tab.DETAILS}
        title={`Details`}
      />
  );

  const tabItem = wrapper.find(`.movie-nav__item`);
  tabItem.simulate(`click`);
  expect(handleTabClick).toHaveBeenCalledTimes(1);
});

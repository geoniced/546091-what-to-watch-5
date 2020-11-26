// import React from "react";
// import {configure, mount} from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import {Tab} from "../../const";
// import FilmScreenTabs from "./film-screen-tabs";
// import {filmListMock, mockReviews} from "../../test-data/test-data";

// configure({adapter: new Adapter()});

// it(`should FilmScreenTabs be able to press on Tab item`, () => {
//   const handleTabClick = jest.fn();

//   const wrapper = mount(
//       <FilmScreenTabs
//         onTabClick={handleTabClick}
//         currentTab={Tab.DETAILS}
//         reviews={mockReviews}
//         film={filmListMock[0]}
//       />
//   );

//   const tabItem = wrapper.find(`.movie-nav__item`).at(1);
//   tabItem.simulate(`click`);
//   expect(handleTabClick).toHaveBeenCalledTimes(1);
// });

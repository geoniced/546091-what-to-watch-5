import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {mockedStore} from "../../test-data/store";
import {createNodeMockWithVideo, filmListMock} from "../../test-data/test-data";
import {MyListScreen} from "./my-list-screen";

describe(`MyListScreen render`, () => {
  it(`renders MyListScreen component with 8 items`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MyListScreen
                films={filmListMock.slice(0, 8)}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: createNodeMockWithVideo,
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders MyListScreen component with empty array of films`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <MyListScreen
                films={[]}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: createNodeMockWithVideo,
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

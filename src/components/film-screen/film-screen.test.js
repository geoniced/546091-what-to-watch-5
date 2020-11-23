import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {AuthorizationStatus} from "../../const";
import {mockedStore} from "../../test-data/store";
import {filmListMock, mockReviews, noop} from "../../test-data/test-data";
import {FilmScreen} from "./film-screen";

describe(`FilmScreen render`, () => {
  it(`renders FilmScreen component when user is authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <FilmScreen
                film={filmListMock[0]}
                films={filmListMock}
                authorizationStatus={AuthorizationStatus.AUTH}
                reviews={mockReviews}
                onPlayButtonClick={noop}
                loadReviews={noop}
              />
            </BrowserRouter>
          </Provider>,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders FilmScreen when the user is not authorized`, () => {
    const tree = renderer
      .create(
          <Provider store={mockedStore}>
            <BrowserRouter>
              <FilmScreen
                film={filmListMock[0]}
                films={filmListMock}
                authorizationStatus={AuthorizationStatus.NO_AUTH}
                reviews={mockReviews}
                onPlayButtonClick={noop}
                loadReviews={noop}
              />
            </BrowserRouter>
          </Provider>,
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


/*
Could not find "store" in the context of "Connect(UserBlock)".
Either wrap the root component in a <Provider>, or pass a custom React context provider
to <Provider> and the corresponding React context consumer to Connect(UserBlock) in connect options.
 */

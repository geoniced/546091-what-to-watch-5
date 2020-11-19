// import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import renderer from "react-test-renderer";
// import {filmListMock, movieCard, noop} from "../../test-data/test-data";
// import {MainPage} from "./main-page";

// describe(`MainPage render`, () => {
//   it(`renders MainPage component`, () => {
//     const tree = renderer
//       .create(
//           <MainPage
//             movieCard={movieCard}
//             activeGenre={`Action`}
//             films={filmListMock}
//             shownFilmsCount={8}
//             onPlayButtonClick={noop}
//             onGenreChange={noop}
//             onShowMoreButtonClick={noop}
//           />
//       )
//       .toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });

/*
Could not find "store" in the context of "Connect(UserBlock)".
Either wrap the root component in a <Provider>, or pass a custom React
context provider to <Provider> and the corresponding React context consumer
to Connect(UserBlock) in connect options.
*/

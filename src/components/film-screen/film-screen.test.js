// import React from "react";
// import {BrowserRouter} from "react-router-dom";
// import renderer from "react-test-renderer";
// import {AuthorizationStatus} from "../../const";
// import {filmListMock, mockReviews, noop} from "../../test-data/test-data";
// import {FilmScreen} from "./film-screen";

// it(`renders FilmScreen component`, () => {
//   const tree = renderer
//     .create(
//         <BrowserRouter>
//           <FilmScreen
//             film={filmListMock[0]}
//             films={filmListMock}
//             authorizationStatus={AuthorizationStatus.AUTH}
//             reviews={mockReviews}
//             onPlayButtonClick={noop}
//             loadReviews={noop}
//           />
//         </BrowserRouter>
//     )
//     .toJSON();

//   expect(tree).toMatchSnapshot();
// });

/*
Could not find "store" in the context of "Connect(UserBlock)".
Either wrap the root component in a <Provider>, or pass a custom React context provider
to <Provider> and the corresponding React context consumer to Connect(UserBlock) in connect options.
 */

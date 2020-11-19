import React from "react";
import renderer from "react-test-renderer";
import {filmListMock} from "../../test-data/test-data";
import VideoPlayer from "./video-player";

const mockFilm = filmListMock[0];

describe(`VideoPlayer render`, () => {
  it(`renders VideoPlayer component with playing video, styles, additionalClasses, muted and resetAfterPause`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isPlaying={true}
            src={mockFilm.video}
            poster={mockFilm.previewImage}
            width={280}
            height={175}
            videoStyles={{
              verticalAlign: `top`,
              width: `100%`,
              height: `100%`,
              objectFit: `cover`,
            }}
            additionalClasses={`test--additional`}
            isMuted
            resetAfterPause
          />,
          {
            createNodeMock: () => {
              return {};
            }
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`renders VideoPlayer component with not playing video, no styles, no additionalClasses, not muted and not resetAfterPause`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            isPlaying={false}
            src={mockFilm.video}
            poster={mockFilm.previewImage}
            width={280}
            height={175}
          />,
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

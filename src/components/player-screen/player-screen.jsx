import React, {createRef, Fragment, PureComponent, useState} from "react";
import PropTypes from "prop-types";
import {FilmTypes} from "../../prop-types-validations";
import VideoPlayer from "../video-player/video-player";
import PlayerTimeControls from "../player-time-controls/player-time-controls";

const getPlayerPlayButtonTemplate = (isPlaying) => {
  if (isPlaying) {
    return (
      <Fragment>
        <svg viewBox="0 0 14 21" width="14" height="21">
          <use xlinkHref="#pause"></use>
        </svg>
        <span>Pause</span>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Fragment>
  );
};

const PlayerScreen = (props) => {
  const {film, onExitButtonClick} = props;

  const {
    video,
    runtime,
    backgroundImage,
    title,
  } = film;

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentTimeSeconds, setCurrentTimeSeconds] = useState(0);

  const playerRef = createRef();

  const handlePlayerButtonClick = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const handleFullscreenButtonClick = () => {
    if (isFullScreen) {
      closeFullScreen();
    } else {
      openFullScreen();
    }
  };

  const handleCurrentTimeChange = (seconds) => {
    setCurrentTimeSeconds(seconds);
  };

  const playVideo = () => {
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    setIsPlaying(false);
  };

  const openFullScreen = () => {
    playerRef.current.requestFullscreen();
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    document.exitFullscreen();
    setIsFullScreen(false);
  };

  const playerPlayButtonTemplate = getPlayerPlayButtonTemplate(isPlaying);

  return (
    <div
      className="player"
      ref={playerRef}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        additionalClasses="player__video"
        src={video}
        poster={backgroundImage}
        onCurrentTimeChange={handleCurrentTimeChange}
      />

      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}
      >
        Exit
      </button>

      <div className="player__controls">
        <PlayerTimeControls
          runtime={runtime}
          currentTimeSeconds={currentTimeSeconds}
        />

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayerButtonClick}
          >
            {playerPlayButtonTemplate}
          </button>
          <div className="player__name">{title}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullscreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

PlayerScreen.propTypes = {
  film: FilmTypes.filmCard,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default PlayerScreen;

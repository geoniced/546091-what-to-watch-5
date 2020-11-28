import React, {useEffect, useState} from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";
import VideoPlayer from "../video-player/video-player";

const HOVER_TIME_TO_ACTIVE = 1000;

const FilmCardList = (props) => {
  const {films} = props;

  let timerId = null;
  const [activeItem, setActiveItem] = useState(-1);

  const mouseOverHandler = (itemId) => {
    timerId = setTimeout(() => {
      if (timerId) {
        setActiveItem(itemId);
      }
    }, HOVER_TIME_TO_ACTIVE);
  };

  const mouseLeaveHandler = () => {
    clearTimeout(timerId);
    timerId = null;

    setActiveItem(-1);
  };

  const renderPlayer = (videoPlayerSettings) => {
    const {filmId, previewImage, videoPreview, width, height, videoStyles} = videoPlayerSettings;

    return (
      <VideoPlayer
        isPlaying={activeItem === filmId}
        poster={previewImage}
        src={videoPreview}
        width={width}
        height={height}
        videoStyles={videoStyles}
        resetAfterPause
        isMuted
      />
    );
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerId);
      timerId = null;
    };
  });

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <FilmCard
          key={`film-${i}`}
          filmId={i}
          film={film}
          renderPlayer={renderPlayer}
          mouseOverHandler={mouseOverHandler}
          mouseLeaveHandler={mouseLeaveHandler}
        />
      ))}
    </div>
  );
};

FilmCardList.propTypes = {
  films: FilmTypes.films,
};

export default FilmCardList;

import React from "react";
import {Link} from "react-router-dom";
import {FilmTypes} from "../../prop-types-validations";
import VideoPlayer from "../video-player/video-player";

const CardVideoSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const VIDEO_STYLES = {
  verticalAlign: `top`,
  width: `100%`,
  height: `100%`,
  objectFit: `cover`,
};

const FilmCard = (props) => {
  const {
    title,
    fullSizePoster,
  } = props.film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <VideoPlayer
          src={fullSizePoster}
          poster={fullSizePoster}
          width={CardVideoSize.WIDTH}
          height={CardVideoSize.HEIGHT}
          videoStyles={VIDEO_STYLES}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/id" className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmCard;

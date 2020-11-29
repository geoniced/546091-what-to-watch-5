import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FilmTypes} from "../../prop-types-validations";
import {AppRoute} from "../../const";

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
  const {filmId, renderPlayer, mouseOverHandler, mouseLeaveHandler} = props;
  const {
    id,
    title,
    previewImage,
    videoPreview,
  } = props.film;

  const videoPlayerSettings = {
    previewImage,
    videoPreview,
    width: CardVideoSize.WIDTH,
    height: CardVideoSize.HEIGHT,
    videoStyles: VIDEO_STYLES,
    filmId,
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        mouseOverHandler(filmId);
      }}
      onMouseLeave={mouseLeaveHandler}
    >
      <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          {renderPlayer(videoPlayerSettings)}
        </div>
        <h3 className="small-movie-card__title">
          {title}
        </h3>
      </Link>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmTypes.filmCard,
  filmId: PropTypes.number.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  mouseOverHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export default React.memo(FilmCard);

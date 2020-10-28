import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FilmTypes} from "../../prop-types-validations";

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
    title,
    fullSizePoster,
    video,
  } = props.film;

  const videoPlayerSettings = {
    fullSizePoster,
    video,
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
      <div className="small-movie-card__image">
        {renderPlayer(videoPlayerSettings)}
      </div>
      <h3 className="small-movie-card__title">
        <Link to="/films/id" className="small-movie-card__link">{title}</Link>
      </h3>
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

import React from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";

const FilmCardList = (props) => {
  const {films, renderPlayer, mouseOverHandler, mouseLeaveHandler} = props;

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

FilmCardList.propTypes = FilmTypes.films;

export default FilmCardList;

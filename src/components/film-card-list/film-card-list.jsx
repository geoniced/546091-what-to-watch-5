import React, {Fragment, PureComponent} from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";
import ShowMoreButton from "../show-more-button/show-more-button";

const FilmCardWrapped = withVideoPlayer(FilmCard);

const FILM_CARDS_PER_STEP = 8;

class FilmCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      // activeCard: null, // it is not needed...
      shownCards: Math.min(FILM_CARDS_PER_STEP, this.props.films.length),
    };
  }

  render() {
    const {films} = this.props;
    const {shownCards} = this.state;
    const shownFilms = films.slice(0, shownCards);

    console.log(shownFilms.length <= films.length);

    return (
      <Fragment>
        <div className="catalog__movies-list">
          {shownFilms.map((film, i) => (
            <FilmCardWrapped
              key={`film-${i}`}
              film={film}
            />
          ))}
        </div>
        {shownFilms.length < films.length ? <ShowMoreButton /> : null}

      </Fragment>
    );
  }
}

FilmCardList.propTypes = FilmTypes.films;

export default FilmCardList;

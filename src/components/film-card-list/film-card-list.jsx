import React, {PureComponent} from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";
import withVideoPlayer from "../../hocs/with-video-player";

const FilmCardWrapped = withVideoPlayer(FilmCard);

class FilmCardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <FilmCardWrapped
            key={`film-${i}`}
            film={film}
          />
        ))}
      </div>
    );
  }
}

FilmCardList.propTypes = FilmTypes.films;

export default FilmCardList;

import React, {PureComponent} from "react";
import {filmListProps} from "../../prop-types-validations";
import FilmCard from "../film-card/film-card";

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
          <FilmCard
            key={`film-${i}`}
            film={film}
          />
        ))}
      </div>
    );
  }
}

FilmCardList.propTypes = filmListProps;

export default FilmCardList;

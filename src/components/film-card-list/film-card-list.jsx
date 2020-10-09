import React, {PureComponent} from "react";
import PropTypes from "prop-types";
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

FilmCardList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default FilmCardList;

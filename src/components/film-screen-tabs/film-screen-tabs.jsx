import React, {PureComponent, Fragment} from "react";
import {FilmTypes} from "../../prop-types-validations";
import FilmCardDetailsTab from "../film-card-details-tab/film-card-details-tab";

const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

class FilmScreenTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: Tab.DETAILS,
    };
  }

  render() {
    const {
      title,
      genre,
      releaseYear,
      poster,
      fullSizePoster,
      // description, // these 4 commented properties will be added after tabs' logic
      // rating,
      // ratingDescription,
      // ratingsCount,
      director,
      starring,
      runtime,
    } = this.props.film;

    // const starringActorsFormatted = getStarringActorsMarkup(starring);

    const {currentTab} = this.state;

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Overview</a>
            </li>
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link">Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        {this.getTabContentByType(currentTab)}
      </div>
    );
  }

  getTabContentByType(tabType) {
    switch (tabType) {
      case Tab.OVERVIEW:
        break;
      case Tab.DETAILS:
        return <FilmCardDetailsTab film={this.props.film}/>;
      case Tab.REVIEWS:
        return;
    }

    return null;
  }
}

FilmScreenTabs.propTypes = {
  film: FilmTypes.filmCard,
};

export default FilmScreenTabs;

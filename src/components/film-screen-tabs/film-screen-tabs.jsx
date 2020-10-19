import React, {PureComponent} from "react";
import {FilmTypes, ReviewTypes} from "../../prop-types-validations";
import FilmCardDetailsTab from "../film-card-details-tab/film-card-details-tab";
import FilmCardReviewTab from "../film-card-review-tab/film-card-review-tab";
import FilmCardOverviewTab from "../film-card-overview-tab/film-card-overview-tab";

const Tab = {
  OVERVIEW: `OVERVIEW`,
  DETAILS: `DETAILS`,
  REVIEWS: `REVIEWS`,
};

const TABS = {
  [Tab.OVERVIEW]: {
    title: `Overview`,
    type: Tab.OVERVIEW,
  },
  [Tab.DETAILS]: {
    title: `Details`,
    type: Tab.DETAILS,
  },
  [Tab.REVIEWS]: {
    title: `Reviews`,
    type: Tab.REVIEWS,
  },
};

class FilmScreenTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: Tab.OVERVIEW,
    };

    this._handleTabClick = this._handleTabClick.bind(this);
  }

  _handleTabClick(evt) {
    evt.preventDefault();
    const tabType = evt.currentTarget.dataset.tabType;

    this.setState({
      currentTab: tabType,
    });
  }

  render() {
    const {currentTab} = this.state;
    const tabs = Object.values(TABS);

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((tab, i) => (
              <li key={`tab-${i}`}
                className={`movie-nav__item ${tab.type === currentTab ? `movie-nav__item--active` : ``}`}
                onClick={this._handleTabClick}
                data-tab-type={tab.type}
              >
                <a href="#" className="movie-nav__link">
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {this.getTabContentByType(currentTab)}
      </div>
    );
  }

  getTabContentByType(tabType) {
    switch (tabType) {
      case Tab.OVERVIEW:
        return <FilmCardOverviewTab film={this.props.film} />;
      case Tab.DETAILS:
        return <FilmCardDetailsTab film={this.props.film}/>;
      case Tab.REVIEWS:
        return <FilmCardReviewTab reviews={this.props.reviews}/>;
    }

    return null;
  }
}

FilmScreenTabs.propTypes = {
  film: FilmTypes.filmCard,
  reviews: ReviewTypes.reviewsList,
};

export default FilmScreenTabs;

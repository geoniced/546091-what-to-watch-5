import React from "react";
import PropTypes from "prop-types";
import {FilmTypes, ReviewTypes} from "../../prop-types-validations";
import FilmCardDetailsTab from "../film-card-details-tab/film-card-details-tab";
import FilmCardReviewTab from "../film-card-review-tab/film-card-review-tab";
import FilmCardOverviewTab from "../film-card-overview-tab/film-card-overview-tab";
import {Tab} from "../../const";
import FilmScreenTabItem from "../film-screen-tab-item/film-screen-tab-item";

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

const getTabContentByType = (tabType, film, reviews) => {
  switch (tabType) {
    case Tab.OVERVIEW:
      return <FilmCardOverviewTab film={film} />;
    case Tab.DETAILS:
      return <FilmCardDetailsTab film={film}/>;
    case Tab.REVIEWS:
      return <FilmCardReviewTab reviews={reviews}/>;
  }

  return null;
};

const FilmScreenTabs = (props) => {
  const {currentTab, film, reviews, onTabClick} = props;
  const tabs = Object.values(TABS);

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab, i) => (
            <FilmScreenTabItem
              key={`tab-${i}`}
              isActive={tab.type === currentTab}
              type={tab.type}
              title={tab.title}
              onTabClick={onTabClick}
            />
          ))}
        </ul>
      </nav>

      {getTabContentByType(currentTab, film, reviews)}
    </div>
  );
};

FilmScreenTabs.propTypes = {
  currentTab: PropTypes.oneOf([...Object.values(Tab)]).isRequired,
  film: FilmTypes.filmCard,
  reviews: ReviewTypes.reviewsList,
  onTabClick: PropTypes.func.isRequired,
};

export default FilmScreenTabs;

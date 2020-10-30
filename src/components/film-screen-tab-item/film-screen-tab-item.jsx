import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";

const FilmScreenTabItem = (props) => {
  const {isActive, type, title, onTabClick} = props;

  return (
    <li
      className={`movie-nav__item ${isActive ? `movie-nav__item--active` : ``}`}
      onClick={onTabClick}
      data-tab-type={type}
    >
      <a href="#" className="movie-nav__link">
        {title}
      </a>
    </li>
  );
};

FilmScreenTabItem.propTypes = {
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf([...Object.values(Tab)]).isRequired,
  title: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export {FilmScreenTabItem};
export default React.memo(FilmScreenTabItem);

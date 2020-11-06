import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../const";

const LogoBlock = (props) => {
  const {isFooter = false, noLink = false} = props;

  const linkClasses = `logo__link ${isFooter ? `logo__link--light` : ``}`;

  const linkContent = (
    <Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Fragment>
  );

  return (
    <div className="logo">
      {noLink
        ? (
          <a className={linkClasses}>
            {linkContent}
          </a>
        )
        : (
          <Link to={AppRoute.ROOT} className={linkClasses}>
            {linkContent}
          </Link>
        )
      }

    </div>
  );
};

LogoBlock.propTypes = {
  isFooter: PropTypes.bool,
  noLink: PropTypes.bool,
};

export default LogoBlock;

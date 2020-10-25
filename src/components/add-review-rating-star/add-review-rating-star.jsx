import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";

class AddReviewRatingStar extends PureComponent {
  render() {
    const {starIndex, checked, onRatingChange} = this.props;

    return (
      <Fragment key={`star-${starIndex}`}>
        <input
          className="rating__input"
          id={`star-${starIndex}`}
          type="radio"
          name="rating"
          value={starIndex}
          checked={checked}
          onChange={onRatingChange}
        />
        <label className="rating__label" htmlFor={`star-${starIndex}`}>Rating {starIndex}</label>
      </Fragment>
    );
  }
}

AddReviewRatingStar.propTypes = {
  starIndex: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default AddReviewRatingStar;

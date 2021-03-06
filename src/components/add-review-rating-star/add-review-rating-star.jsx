import React, {Fragment} from "react";
import PropTypes from "prop-types";

const AddReviewRatingStar = (props) => {
  const {starIndex, checked, onRatingChange, disabled} = props;

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
        disabled={disabled}
      />
      <label className="rating__label" htmlFor={`star-${starIndex}`}>Rating {starIndex}</label>
    </Fragment>
  );
};

AddReviewRatingStar.propTypes = {
  starIndex: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export {AddReviewRatingStar};
export default React.memo(AddReviewRatingStar);

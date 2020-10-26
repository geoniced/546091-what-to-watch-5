import React, {Fragment, PureComponent} from "react";
import PropTypes from "prop-types";

const AddReviewRatingStar = (props) => {
  const {starIndex, checked, onRatingChange} = props;

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
};

AddReviewRatingStar.propTypes = {
  starIndex: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export {AddReviewRatingStar};
export default React.memo(AddReviewRatingStar);

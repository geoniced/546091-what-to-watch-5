import React from "react";
import PropTypes from "prop-types";
import AddReviewRatingStar from "../add-review-rating-star/add-review-rating-star";

const STARS_COUNT = 5;

const AddReviewBlock = (props) => {
  const {ratingStars, onRatingChange, onReviewChange, onSubmit} = props;

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {new Array(STARS_COUNT).fill().map((_, index) => {
              const currentStarIndex = index + 1;

              return (
                <AddReviewRatingStar
                  key={`star-${currentStarIndex}`}
                  starIndex={currentStarIndex}
                  checked={currentStarIndex === ratingStars}
                  onRatingChange={onRatingChange}
                />
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={onReviewChange}
          ></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewBlock.propTypes = {
  ratingStars: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddReviewBlock;

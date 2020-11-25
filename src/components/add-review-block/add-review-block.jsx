import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddReviewRatingStar from "../add-review-rating-star/add-review-rating-star";
import {submitReview} from "../../store/api-actions";

const STARS_COUNT = 5;

const AddReviewBlock = (props) => {
  const {
    filmId,
    onSubmit
  } = props;

  const [ratingStars, setRatingStars] = useState(1);
  const [reviewText, setReviewText] = useState(``);

  const handleRatingChange = (evt) => {
    setRatingStars(Number(evt.target.value));
  };

  const handleReviewChange = (evt) => {
    setReviewText(evt.target.value);
  };

  const onReviewSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({rating: ratingStars, comment: reviewText, filmId});
  };

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={onReviewSubmit}
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
                  onRatingChange={handleRatingChange}
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
            onChange={handleReviewChange}
            value={reviewText}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

AddReviewBlock.propTypes = {
  filmId: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(formData) {
    dispatch(submitReview(formData));
  },
});

export {AddReviewBlock};

export default connect(null, mapDispatchToProps)(AddReviewBlock);

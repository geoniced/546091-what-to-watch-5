import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddReviewRatingStar from "../add-review-rating-star/add-review-rating-star";
import {submitReview} from "../../store/api-actions";
import {extend, isValidRatingStars, isValidReviewText} from "../../utils";
import FormErrorBlock from "../form-error-block/form-error-block";
import {MAX_REVIEW_TEXT_LENGTH, MIN_REVIEW_TEXT_LENGTH, VALIDATION_MESSAGES} from "../../const";

const STARS_COUNT = 5;

const AddReviewBlock = (props) => {
  const {
    filmId,
    onSubmit
  } = props;

  const [ratingStars, setRatingStars] = useState(0);
  const [reviewText, setReviewText] = useState(``);
  const [formErrors, setFormErrors] = useState({});

  const handleRatingChange = (evt) => {
    setRatingStars(Number(evt.target.value));
  };

  const handleReviewChange = (evt) => {
    setReviewText(evt.target.value);
  };

  const checkReviewTextValidity = () => {
    let isValid = true;

    if (isValidReviewText(reviewText)) {
      isValid = false;
      setFormErrors(extend(formErrors, {
        reviewText: VALIDATION_MESSAGES.REVIEW_TEXT,
      }));
    } else {
      const formErrorsPrev = extend(formErrors, {});
      delete formErrorsPrev.reviewText;

      setFormErrors(formErrorsPrev);
    }

    return isValid;
  };

  const checkRatingStarsValidity = () => {
    let isValid = true;

    if (isValidRatingStars(ratingStars)) {
      isValid = false;

      setFormErrors(extend(formErrors, {
        ratingStars: VALIDATION_MESSAGES.RATING_STARS,
      }));
    } else {
      const formErrorsPrev = extend(formErrors, {});
      delete formErrorsPrev.ratingStars;

      setFormErrors(formErrorsPrev);
    }

    return isValid;
  };

  const onReviewSubmit = (evt) => {
    evt.preventDefault();
    let formIsValid = true;

    if (!checkRatingStarsValidity() || !checkReviewTextValidity()) {
      formIsValid = false;
    }

    if (formIsValid) {
      onSubmit({rating: ratingStars, comment: reviewText, filmId});
    }
  };

  const isSubmitButtonDisabled = () => {
    return isValidRatingStars(ratingStars) || isValidReviewText(reviewText);
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
          <FormErrorBlock error={formErrors.ratingStars} />
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            minLength={MIN_REVIEW_TEXT_LENGTH}
            maxLength={MAX_REVIEW_TEXT_LENGTH}
            onChange={handleReviewChange}
            value={reviewText}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isSubmitButtonDisabled()}
            >
              Post
            </button>
          </div>
          <FormErrorBlock error={formErrors.reviewText} />
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

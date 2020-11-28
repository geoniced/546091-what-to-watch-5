import React, {useState} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import AddReviewRatingStar from "../add-review-rating-star/add-review-rating-star";
import {submitReview} from "../../store/api-actions";
import {checkFieldValidity, isInvalidValidation, isValidRatingStars, isValidReviewText} from "../../utils";
import FormErrorBlock from "../form-error-block/form-error-block";
import {ReviewTextLength, VALIDATION_MESSAGES} from "../../const";
import {setReviewSubmitionLoading} from "../../store/actions";
import {getIsReviewSubmitting} from "../../store/selectors";

const STARS_COUNT = 5;

const AddReviewBlock = (props) => {
  const {
    filmId,
    isReviewSubmitting,
    onSubmit,
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

  const onReviewSubmit = (evt) => {
    evt.preventDefault();
    let formIsValid = true;

    const ratingStarsValidity = {
      field: `ratingStars`,
      value: ratingStars,
      setter: setFormErrors,
      validationFunction: isValidRatingStars,
      errorMessage: VALIDATION_MESSAGES.RATING_STARS,
    };

    const reviewTextValidity = {
      field: `reviewText`,
      value: reviewText,
      setter: setFormErrors,
      validationFunction: isValidReviewText,
      errorMessage: VALIDATION_MESSAGES.REVIEW_TEXT,
    };

    const validations = [
      checkFieldValidity(ratingStarsValidity),
      checkFieldValidity(reviewTextValidity),
    ];

    if (validations.some(isInvalidValidation)) {
      formIsValid = false;
    }

    if (formIsValid) {
      onSubmit({rating: ratingStars, comment: reviewText, filmId});
    }
  };

  const isSubmitButtonDisabled = () => {
    return isReviewSubmitting || !isValidRatingStars(ratingStars) || !isValidReviewText(reviewText);
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
                  disabled={isReviewSubmitting}
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
            minLength={ReviewTextLength.MIN}
            maxLength={ReviewTextLength.MAX}
            onChange={handleReviewChange}
            value={reviewText}
            disabled={isReviewSubmitting}
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
  isReviewSubmitting: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isReviewSubmitting: getIsReviewSubmitting(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(formData) {
    dispatch(setReviewSubmitionLoading(true));
    dispatch(submitReview(formData));
  },
});

export {AddReviewBlock};

export default connect(mapStateToProps, mapDispatchToProps)(AddReviewBlock);

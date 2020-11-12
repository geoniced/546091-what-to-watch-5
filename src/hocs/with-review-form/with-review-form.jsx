import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {submitReview} from "../../store/api-actions";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        ratingStars: 1,
        reviewText: ``,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleReviewChange = this._handleReviewChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    _handleRatingChange(evt) {
      this.setState({
        ratingStars: Number(evt.target.value),
      });
    }

    _handleReviewChange(evt) {
      this.setState({
        reviewText: evt.target.value,
      });
    }

    _handleFormSubmit(evt) {
      const {filmId, onSubmit} = this.props;
      const {ratingStars, reviewText} = this.state;

      evt.preventDefault();

      onSubmit({
        filmId,
        rating: ratingStars,
        comment: reviewText,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          onSubmit={this._handleFormSubmit}
          ratingStars={this.state.ratingStars}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    filmId: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(formData) {
      dispatch(submitReview(formData));
    },
  });

  return connect(null, mapDispatchToProps)(WithReviewForm);
};

export default withReviewForm;

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

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

    render() {
      return (
        <Component
          {...this.props}
          onRatingChange={this._handleRatingChange}
          onReviewChange={this._handleReviewChange}
          ratingStars={this.state.ratingStars}
          reviewText={this.state.reviewText}
        />
      );
    }
  }

  WithReviewForm.propTypes = {
    filmId: PropTypes.number.isRequired,
  };

  return WithReviewForm;
};

export default withReviewForm;

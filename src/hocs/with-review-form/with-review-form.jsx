import React, {PureComponent} from "react";

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
      evt.preventDefault();
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

  WithReviewForm.propTypes = {};

  return WithReviewForm;
};

export default withReviewForm;

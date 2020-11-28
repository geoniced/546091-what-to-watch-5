import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getError} from "../../store/selectors";
import {setError} from "../../store/actions";

const TIME_TO_FADE_OUT = 4000;

const ErrorNotification = (props) => {
  const ERROR_STYLES = {
    borderRadius: `5px`,
    position: `fixed`,
    top: `10px`,
    left: `50%`,
    border: `3px solid red`,
    backgroundColor: `#ff9898`,
    zIndex: 10000,
    padding: `10px 20px`,
    transform: `translateX(-50%)`,
    textAlign: `center`,
  };

  const {error, setErrorAction} = props;

  if (error === null) {
    return null;
  }

  useEffect(() => {
    let timerId = setTimeout(() => {
      setErrorAction(null);
    }, TIME_TO_FADE_OUT);

    return () => {
      clearTimeout(timerId);
      timerId = null;
    };
  });

  return (
    <div
      style={ERROR_STYLES}
    >
      {error.text}
    </div>
  );
};

ErrorNotification.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.shape({
      text: PropTypes.string,
    })
  ]),
  setErrorAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  setErrorAction(error) {
    dispatch(setError(error));
  }
});

export {ErrorNotification};
export default connect(mapStateToProps, mapDispatchToProps)(ErrorNotification);

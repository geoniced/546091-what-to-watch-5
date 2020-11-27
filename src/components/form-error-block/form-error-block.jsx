import React from "react";
import PropTypes from "prop-types";

const ERROR_STYLES = {
  color: `red`,
  textAlign: `center`,
  padding: `10px 20px`
};

const FormErrorBlock = (props) => {
  const {error} = props;

  if (!error) {
    return null;
  }

  return (
    <div style={ERROR_STYLES}>
      {error}
    </div>
  );
};

FormErrorBlock.propTypes = {
  error: PropTypes.string,
};

export default FormErrorBlock;

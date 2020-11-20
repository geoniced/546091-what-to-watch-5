import React from "react";
import PropTypes from "prop-types";

const MockComponentWithChildren = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponentWithChildren.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export {MockComponentWithChildren};


const MockComponent = () => <div />;
export {MockComponent};

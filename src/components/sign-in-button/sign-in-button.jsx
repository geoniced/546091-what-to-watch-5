import React from "react";
import {Link} from "react-router-dom";

const SignInButton = () => {
  return (
    <Link
      to={`/login`}
      className="user-block__link"
    >
      Sign in
    </Link>
  );
};

export default SignInButton;

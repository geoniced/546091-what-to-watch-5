import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import UserAvatar from "../user-avatar/user-avatar";
import SignInButton from "../sign-in-button/sign-in-button";
import {AuthorizationStatus} from "../../const";
import {getAuthorizationStatus} from "../../store/selectors";

const getUserBlockComponentByAuthorizationStatus = (authStatus) => {
  switch (authStatus) {
    case AuthorizationStatus.AUTH:
      return <UserAvatar />;
    case AuthorizationStatus.NO_AUTH:
      return <SignInButton />;
  }

  return null;
};

const UserBlock = (props) => {
  const {authorizationStatus} = props;

  return (
    <div className="user-block">
      {getUserBlockComponentByAuthorizationStatus(authorizationStatus)}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {UserBlock};
export default connect(mapStateToProps)(UserBlock);

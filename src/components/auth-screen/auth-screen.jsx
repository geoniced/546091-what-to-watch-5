import React, {createRef, useState} from "react";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import LogoBlock from "../logo-block/logo-block";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {checkFieldValidity, isValidEmail, isValidPassword} from "../../utils";
import {getAuthorizationStatus} from "../../store/selectors";
import {AppRoute, AuthorizationStatus, VALIDATION_MESSAGES} from "../../const";
import FormErrorBlock from "../form-error-block/form-error-block";

const AuthScreen = (props) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const {authorizationStatus, onSubmit} = props;
  const [formErrors, setFormErrors] = useState({});

  const errorInputStyles = {
    border: `2px solid red`,
  };

  const validateForm = () => {
    let isFormValid = true;
    const email = emailRef.current;
    const password = passwordRef.current;

    const emailValidity = {
      field: `email`,
      value: email.value,
      formErrors,
      setter: setFormErrors,
      validationFunction: isValidEmail,
      errorMessage: VALIDATION_MESSAGES.EMAIL,
    };

    const passwordValidity = {
      field: `password`,
      value: password.value,
      formErrors,
      setter: setFormErrors,
      validationFunction: isValidPassword,
      errorMessage: VALIDATION_MESSAGES.PASSWORD,
    };

    if (!checkFieldValidity(emailValidity) || !checkFieldValidity(passwordValidity)) {
      isFormValid = false;
    }

    return isFormValid;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (validateForm()) {
      onSubmit({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.ROOT} />
    );
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <LogoBlock />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          onSubmit={handleSubmit}
          action=""
          className="sign-in__form"
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                style={formErrors[`email`] ? errorInputStyles : {}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              <FormErrorBlock error={formErrors.email} />
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder={formErrors[`password`] || `Password`}
                name="user-password"
                id="user-password"
                style={formErrors[`password`] ? errorInputStyles : {}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              <FormErrorBlock error={formErrors.password} />
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <LogoBlock isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

AuthScreen.propTypes = {
  authorizationStatus: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);

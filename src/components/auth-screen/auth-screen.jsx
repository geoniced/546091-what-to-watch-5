import React, {createRef, useState} from "react";
import PropTypes from "prop-types";
import LogoBlock from "../logo-block/logo-block";
import {connect} from "react-redux";
import {login} from "../../store/api-actions";
import {isValidEmail} from "../../utils";

const AuthScreen = (props) => {
  const emailRef = createRef();
  const passwordRef = createRef();

  const {onSubmit} = props;
  const [errors, setErrors] = useState({});

  const errorInputStyles = {
    border: `2px solid red`,
  };

  const validateForm = () => {
    let isFormValid = true;
    const formErrors = {};
    const email = emailRef.current;
    const password = passwordRef.current;

    if (!isValidEmail(email.value)) {
      isFormValid = false;
      formErrors[`email`] = `Enter a valid email`;
    }

    if (password.value.length === 0) {
      isFormValid = false;
      formErrors[`password`] = `Enter the password field`;
    }

    setErrors(formErrors);
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
                style={errors[`email `] ? errorInputStyles : {}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder={errors[`password`] || `Password`}
                name="user-password"
                id="user-password"
                style={errors[`password`] ? errorInputStyles : {}}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
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
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthScreen};
export default connect(null, mapDispatchToProps)(AuthScreen);

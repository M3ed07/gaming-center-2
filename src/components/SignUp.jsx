import React, { useState } from 'react';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth } from '../config/Fire';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import swal from 'sweetalert';

const SignUp = () => {
  const Navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState({});
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [values, setValues] = useState({
    FirstName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!values.FirstName.trim()) {
      errors.FirstName = 'First Name is required';
      isValid = false;
    }

    if (!values.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!values.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (values.password.length < 6) {
      errors.password = 'Password should be at least 6 characters long';
      isValid = false;
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user;
        sendEmailVerification(user);
        swal({
          icon: 'info',
          title: 'Verify your account',
          text: `We sent you a verification to your Gmail account`,
        });
        Navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="login-form-container">
      <img className="Login-img" src={require('../Images/loginImage.png')} alt="valorant" />
      <div className="LoginTopSection">
        <img src={require('../Makers project/logo and icons/NewLogo.png')} width={80} height={80} alt="" />
        <h2>Game Center</h2>
      </div>
      <h2 className="Discription">Insert your information to<br />Create new Account</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-input-group-SignUp">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            placeholder="Melad"
            onChange={(e) => setValues((prev) => ({ ...prev, FirstName: e.target.value }))}
          />
          {errors.FirstName && <span className="error-message">{errors.FirstName}</span>}
        </div>

        <div className="form-input-group-SignUp">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="meladhero4@gmail.com"
            onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-input-group-SignUp">
          <label htmlFor="password">Password</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder="password"
            onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
          />
          <button className="passwordEye" type="button" onClick={togglePassword}>
            <img src={require('../Images/logo and icons/invisible.png')} height={30} width={30} alt="" />
          </button>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <div className="form-input-group-SignUp">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder="confirm password"
            onChange={(e) => setValues((prev) => ({ ...prev, confirmPassword: e.target.value }))}
          />
          <button className="passwordEye" type="button" onClick={togglePassword}>
            <img src={require('../Images/logo and icons/invisible.png')} height={30} width={30} alt="" />
          </button>
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
        </div>

        <button className="LoginSubmitButton" type="submit">
          Create Account
        </button>
        <div className="AccountCreated">
          <p>
            Already a member? <button onClick={() => Navigate('/')}>Login</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

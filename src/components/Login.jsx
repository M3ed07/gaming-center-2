import React, { useState } from 'react';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import LoginIcon from '@mui/icons-material/Login';
import { auth, signInWithGoogle } from '../config/Fire';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import './SignIn.css';

const LoginForm = ({ token }) => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await validationSchema.validate({ email, password }, { abortEarly: false });

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        localStorage.setItem('token', user.accessToken);
        swal({
          icon: 'success',
          title: 'Logged in Successfully',
          text: `The current account is ${email}`,
        });
        Navigate('/sidebar/dashboard');
      } else {
        swal({
          icon: 'info',
          title: 'You need to verify your email',
          text: 'Check your Gmail messages to verify your account',
        });
        sendEmailVerification(user);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = {};
        error.inner.forEach((err) => {
          errors[err.path] = err.message;
        });
        setFormErrors(errors);
      } else {
        swal({
          icon: 'error',
          title: 'Login Failed',
          text: 'Something went wrong, please try again',
        });
      }
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login-form-container">
      <img className="Login-img" src={require('../Images/loginImage.png')} alt="valorant" />
      <div className="LoginTopSection">
        <img src={require('../Makers project/logo and icons/NewLogo.png')} width={80} height={80} alt="" />
        <h2>Game Center</h2>
      </div>
      <h2 className="Discription">Let's Login with our Game Center<br />Account First </h2>

      <button class="LoginSubmitButton" onClick={signInWithGoogle}>
        <img src={require('../Makers project/logo and icons/google.png')} alt="google" height={30} width={30} />
        Sign in with Google
      </button>

      <div className="myChoose">
        <div className="line"></div>
        <span>OR</span>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-input-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="meladhero4@gmail.com" onChange={(e) => setEmail(e.target.value)} value={email} required />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}
        </div>

        <div className="form-input-group">
          <label htmlFor="password">Password</label>
          <input
            type={passwordShown ? 'text' : 'password'}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="passwordEye" type="button" onClick={togglePassword}>
            <img src={require('../Images/logo and icons/invisible.png')} height={30} width={30} alt="password" />
          </button>
          {formErrors.password && <span className="error-message">{formErrors.password}</span>}
        </div>
        <button className="LoginSubmitButton" type="submit">
          <LoginIcon /> Login
        </button>
        <div className="CreateNewAccount">
          <p>
            Don't have an account? <button onClick={() => Navigate('/signup')}>Register</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

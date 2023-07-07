import React, { useState } from 'react';
import { createUserWithEmailAndPassword , sendEmailVerification} from 'firebase/auth';
import { auth } from '../config/Fire'
import { useNavigate } from "react-router-dom";
import './SignIn.css'
import swal from 'sweetalert';
const SignUp = () => {
  const Navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = (e) => {
    setPasswordShown(!passwordShown);
  };
    const [values, setValues] = useState({
      FirstName:'',
      LastName:'',
      email:'',
      password:'',
    })
    const handleSubmit = async (event) => {
      event.preventDefault();
      await createUserWithEmailAndPassword(auth , values.email , values.password)
      .then((userCredential)=>{
        const user = userCredential.user;
        sendEmailVerification(user);
        swal({
          icon: "info",
          title: "verify your account",
          text:`We sent you a verification to your gmail account` 
        })
        Navigate('/') 
      }).catch((error) => {
        console.log(error);
      })
    }
    return (
      <div className="login-form-container">
        <img className='Login-img' src={require('../Images/loginImage.png')} alt="valorant" />
       <div className="LoginTopSection">
       <img src={require('../Images/logo and icons/WhiteLogo.png')} width={70} height={70} alt="" />
        <h2>Game Center</h2>
       </div>
       <h2 className='Discription'>Insert your information to<br/>Create new Account</h2>



        <form onSubmit={handleSubmit}>

        <div className="form-input-group-SignUp">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" placeholder='Melad' onChange={(e)=>setValues((prev)=>({...prev,FirstName:e.target.value}))}/>
          </div>
  
          <div className="form-input-group-SignUp">
          <label htmlFor="LastName">Last Name</label>
            <input type="text" placeholder='Duraid' onChange={(e)=>setValues((prev)=>({...prev,LastName:e.target.value}))}/>
          </div>
          <div className="form-input-group-SignUp">
            <label htmlFor="email">Email</label>
            <input type="email"  placeholder='meladhero4@gmail.com' onChange={(e)=>setValues((prev)=>({...prev,email:e.target.value}))}/>
          </div>
  
          <div className="form-input-group-SignUp">
          <label htmlFor="password">Password</label>
            <input type={passwordShown ? "text" : "password"}  placeholder='password' onChange={(e)=>setValues((prev)=>({...prev,password:e.target.value}))}/>
            <button className='passwordEye' onClick={togglePassword}><img src={require('../Images/logo and icons/invisible.png')} height={30} width={30} alt="" /></button>
          </div>
          <button className='LoginSubmitButton' type="submit">Create Account</button>
          <div className='AccountCreated' ><p>Already a member ? <button onClick={()=>Navigate('/')}>login</button></p></div>
        </form>
        
      </div>
    );
  }
  
  export default SignUp;
import React, { useState } from 'react';
import '../../css/Login.css';
import { login } from '../../methods/auth';

const Login = () => {
  const [values, setValues] = useState({
    email:'',
    password:''
  })
 const {email, password} = values;
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({values})
    await login({email, password}).then(data =>{
      console.log(data)
      if(data.error){
        console.log(data.error)
      }else{
        console.log('success')
      }
    }).catch(console.log('Faild'))
    console.log(`email: ${email} Password: ${password}`);
  };

  return (
    <div className="Login">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone number, email, or email"
          value={email}
          onChange={(event) => setValues({email: event.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setValues({...values,password: event.target.value})}
          required
        />
        <button type="submit" onClick= {handleSubmit}>
          Log in
          </button>
        <p>Forgot password?</p>
      </form>
      <hr />
      <p>Don't have an account?
         {/* <a href="#">Sign up</a> */}
         </p>
    </div>
  );
};

export default Login;

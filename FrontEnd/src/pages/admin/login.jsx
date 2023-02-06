import React, { useState } from 'react';
import '../../css/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="Login">
      <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone number, email, or username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <button type="submit">Log in</button>
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

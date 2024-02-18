import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    // Add your login logic here

    // Trigger function to close the login pop-up
    props.closeForm();
  }

  return (
    <div className="auth-form-container" style={{ backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ marginBottom: '8px', display: 'block' }}>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <label htmlFor="password" style={{ marginBottom: '8px', display: 'block' }}>Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button
            type="submit"
            style={{ backgroundColor: '#87CEEB', color: '#fff', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Log In
          </button>
        </Link>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('register')}
        style={{ color: '#87CEEB', cursor: 'pointer', border: 'none', background: 'none', fontWeight: 'bold' }}
      >
        Don't have an account? Register here.
      </button>
    </div>
  );
}

export default Login;

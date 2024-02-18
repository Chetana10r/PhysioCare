import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    // Add your registration logic here
  }

  return (
    <div className="auth-form-container" style={{ backgroundColor: '#fff', color: '#000', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name" style={{ marginBottom: '8px', display: 'block' }}>Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Full Name"
          style={{ width: '100%', padding: '10px', marginBottom: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
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
        <button
          type="submit"
          style={{ backgroundColor: '#ADD8E6', color: '#fff', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Register
        </button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('login')}
        style={{ color: '#ADD8E6', cursor: 'pointer', border: 'none', background: 'none', fontWeight: 'bold' }}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
}

export default Register;

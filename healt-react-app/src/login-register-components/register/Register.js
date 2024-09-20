import React, { useState } from "react";
import "./Register.scss";
import resisterImage from "../../assets/register.png";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else {
      if (name === "password") {
        setPassword(value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username and password", { username, password });
  };

  return (
    <div className="login-container">
      <form className="login-container__form" onSubmit={handleSubmit}>
        <h2>Register here an account</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
        <img src={resisterImage} alt="Logo" className="logo" />
      </form>
    </div>
  );
}

export default Register;

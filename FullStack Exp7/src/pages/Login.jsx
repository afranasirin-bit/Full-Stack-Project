import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      onLogin();
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Project Dashboard</h1>
        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit}>

          <div className="input-box">
            <FaUser />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <small>
          Demo Login <br />
          Username : admin <br />
          Password : 1234
        </small>

      </div>
    </div>
  );
}

export default Login;
import "../css/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
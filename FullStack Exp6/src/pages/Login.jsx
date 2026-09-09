import { useNavigate } from "react-router-dom";
import "./../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Leave Management System</h1>
        <p>Employee Login</p>

        <input type="text" placeholder="Employee ID" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
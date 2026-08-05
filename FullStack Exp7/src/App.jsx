import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}

export default App;
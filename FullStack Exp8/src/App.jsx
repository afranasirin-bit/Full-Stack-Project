import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Result from "./pages/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
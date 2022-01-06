import { Routes, Route, Link } from "react-router-dom";

import Main from "./pages/main";
import ProblemThree from "./pages/problemThree";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/problemThree" element={<ProblemThree />} />
      </Routes>
    </div>
  );
}

export default App;

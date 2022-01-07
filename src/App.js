import { Routes, Route, Link } from "react-router-dom";

import Main from "./pages/main";
import ProblemThree from "./pages/problemThree";
import ProblemTwo from "./pages/problemTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/problemTwo" element={<ProblemTwo />} />
        <Route path="/problemThree" element={<ProblemThree />} />
      </Routes>
    </div>
  );
}

export default App;

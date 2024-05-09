import { lazy } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/HomeScreen/index"));
const RegisterPage = lazy(() => import("./pages/RegisterScreen/RegisterPage"));
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<div> Page not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

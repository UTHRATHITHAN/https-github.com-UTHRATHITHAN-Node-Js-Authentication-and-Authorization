import FormNext from "./components/FormNext";
import { Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormNext />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      {/* <Route path="/home" element={<Home />} /> */}
    </Routes>
  );
}

export default App;

// import Home from "./components/home";
import Header from "./components/Header/header";
import Login from "./pages/Signin/login";
import Register from "./pages/Signup/register";
import Home from "./pages/Home/home";
import Profile from "./pages/Dashboard/profile";
import Course from "./pages/Dashboard/course";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
        <Route path="/course" element={<Course />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;

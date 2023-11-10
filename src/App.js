// import Home from "./components/home";
import Header from "./components/header";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import Profile from "./components/profile";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="/register" element={<Register />} />{" "}
        <Route path="/home" element={<Home />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;

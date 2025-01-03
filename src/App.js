import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import Home from "./Home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./Dashboard";
import Error from "./components/Error";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* <NavBar />
        <Banner /> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </Router>
  );
}

export default App;

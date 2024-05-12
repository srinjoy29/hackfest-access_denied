import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6010/login/success", {
        withCredentials: true,
      });
      setUserdata(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Logout
  const logout = () => {
    window.open("/logout", "_self");
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1 className="text-white">Code-Fusion</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#collab" className={
                activeLink === "Codewithai"
                  ? "active navbar-link"
                  : "navbar-link"
              }
            >
              Code-Collab
            </Nav.Link>
            <Nav.Link
              
              href="#Codewithai"
              className={
                activeLink === "Codewithai"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              
            >
              Code with AI
            </Nav.Link>
            <Nav.Link
              href="#CodeEditor"
              className={
                activeLink === "CodeEditor"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              
            >
              Code Editor
            </Nav.Link>
            <Nav.Link
              
              href="#CodeReview"
              className={
                activeLink === "CodeReview"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              
            >
              Code Buddy
            </Nav.Link>
          </Nav>

          {/* <li><a href = "#Collab" onClick="toggleMenu()">Code-Collab</a></li>
            <a href = "#" onClick="toggleMenu()"></a>
            <a href = "#" onClick="toggleMenu()"></a>
            <a href = "#" onClick="toggleMenu()"></a> */}

          <span className="navbar-text">
            {Object?.keys(userdata)?.length > 0 ? (
              <>
                <li style={{ color: "black", fontWeight: "bold" }}>
                  {userdata?.displayName}
                </li>
                <li onClick={logout}>Logout</li>
                <li>
                  <img
                    src={userdata?.image}
                    style={{ width: "50px", borderRadius: "50%" }}
                    alt=""
                  />
                </li>
              </>
            ) : (
              <li>
                <HashLink to="/login">
                  <button className="vvd">
                    <span>Sign In</span>
                  </button>
                </HashLink>
              </li>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
// import React, { useEffect, useState } from 'react'
// import "./header.css"
// import { NavLink } from "react-router-dom"
// import axios from "axios"

// const Headers = () => {
//     const [userdata, setUserdata] = useState({});
//     console.log("response", userdata)

//     const getUser = async () => {
//         try {
//             const response = await axios.get("http://localhost:6005/login/sucess", { withCredentials: true });

//             setUserdata(response.data.user)
//         } catch (error) {
//             console.log("error", error)
//         }
//     }

//     // logoout
//     const logout = ()=>{
//         window.open("http://localhost:6005/logout","_self")
//     }

//     useEffect(() => {
//         getUser()
//     }, [])
//     return (
//         <>
//             <header>
//                 <nav>
//                     <div className="left">
//                         <h1>Harsh Pathak</h1>
//                     </div>
//                     <div className="right">
//                         <ul>
//                             <li>
//                                 <NavLink to="/">
//                                     Home
//                                 </NavLink>
//                             </li>
//                             {
//                                 Object?.keys(userdata)?.length > 0 ? (
//                                     <>
//                                     <li style={{color:"black",fontWeight:"bold"}}>{userdata?.displayName}</li>
//                                         <li>
//                                             <NavLink to="/dashboard">
//                                                 Dashboard
//                                             </NavLink>
//                                         </li>
//                                         <li onClick={logout}>Logout</li>
//                                         <li>
//                                             <img src={userdata?.image} style={{ width: "50px", borderRadius: "50%" }} alt="" />
//                                         </li>
//                                     </>
//                                 ) : <li>
//                                     <NavLink to="/login">
//                                         Login
//                                     </NavLink>
//                                 </li>
//                             }

//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }

// export default Headers

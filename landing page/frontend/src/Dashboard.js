
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import { Banner } from "./components/Banner";
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects } from './components/Projects';
import { UserButton } from '@clerk/clerk-react';
import Codewithai from './components/Codewithai';
import CodeEditor from './components/CodeEditor';
import Collab from './components/Collab';
import CodeReview from './components/CodeReview';



const Dashboard = () => {

  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:6010/login/sucess", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
      navigate("*")
    }
}


useEffect(() => {
  getUser()
}, [])
  return (
    <>
      <NavBar />
      <Banner />
      <Projects />
      <Collab/>
      <Codewithai/>
      <CodeEditor/>
      <CodeReview/>
      <Contact />
      <Footer />
    </>
  )
}

export default Dashboard
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./components/NavBar";
import { Banner } from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Projects1 } from './components/Projects1';
import Codewithai from './components/Codewithai';
import CodeEditor from './components/CodeEditor';
import Collab from './components/Collab';
import CodeReview from './components/CodeReview';


function Home() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects1/>
      <Collab/>
      <Codewithai/>
      <CodeEditor/>
      <CodeReview/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;

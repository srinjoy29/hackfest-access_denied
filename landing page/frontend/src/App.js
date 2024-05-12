import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // assuming NavBar is default export
import Home from './Home';
import Login from './components/Login'; // assuming Login component is in components folder
import Dashboard from './Dashboard';
import Error from './components/Error'; // assuming Error component is in components folder

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

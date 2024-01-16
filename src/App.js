import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Registers from './page/Registers';
import { About } from './page/About';
import { AuthProvider} from './component/auth';
import Logout from './page/Logout';
import { Contact } from './page/Contact';
import Prediction from './page/Prediction';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
               <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
              <Route
              path="/"
              element={<Logout />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
              <Route
              path="/prediction"
              element={<Prediction />}
            />
            <Route
              path="/registers"
              element={<Registers />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

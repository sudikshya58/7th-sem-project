import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './page/Home';
import Register from './page/Register';
import Registers from './page/Registers';
import { About } from './page/About';
import { AuthProvider} from './component/auth';
import Logout from './page/Logout';
import { Contact } from './page/Contact';
import Prediction from './page/Prediction';
import Login from './page/Login';
import Logged from './component/Logged';

const PrivateRoute = ({ element }) => {
  // Add your authentication logic here
  const isLoggedIn = localStorage.getItem('accessToken') !== null; // Placeholder for the actual authentication check

  return isLoggedIn ? element : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Logged />} />
            <Route
              path="/contact"
              element={<PrivateRoute element={<Contact />} />}
            />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/registers" element={<Registers />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

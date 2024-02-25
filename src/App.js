import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";
import { About } from "./page/About";
import { AuthProvider } from "./component/auth";
import { Contact } from "./page/Contact";
import Prediction from "./page/Prediction";
import Login from "./page/Login";
import Logged from "./component/Logged";
import PrivateRoute from "./component/PrivateRoute";
import Headers from "./component/Header";
import Predictions from "./page/Prediction";
function App() {
  return (
    <div className="App">
      <Router>
      <Headers/>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logins" element={<Login />} />
            <Route path="/predictions" element={<Predictions/>}/>
            <Route path="/login" element={<Logged />} />
            {/* <PrivateRoute path="/contact" element={<Contact />} /> */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/register" element={<Register />} />
            <Route path="/prediction" element={<Prediction />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

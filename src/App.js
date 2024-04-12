import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Home from "./page/Home";
import Register from "./page/Register";
import { About } from "./page/About";
import { AuthProvider } from "./component/auth";
import Login from "./page/Login";
import Predictions from "./page/Prediction";
import { Interest } from "./page/Interest";
import AdminLogin from "./page/AdminLogin";
import { RegisterDashboard } from "./page/RegisterDashboard";
import { Dashboard } from "./page/Dashboard";
import { EditRegisteredData } from "./page/EditRegisteredData";
import { NotAcceptPage } from "./page/NotAcceptPage";
import { PrivateRoute } from "./page/PrivateRoute";
import { ClickAnalysis } from "./page/ClickAnalysis";
  
function App() {
  const token = localStorage.getItem("admin_token");
  console.log(token);
  const logintoken = localStorage.getItem("auth-token") || "";
  console.log(logintoken)
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logins" element={<Login />} />
            {/* <Route path="/predictions" element={<Predictions/>}/> */}
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            <Route path="/predictions" element={<Predictions/>}/> 
            <Route path="/notaccept" element={<NotAcceptPage/>}/>
            <Route path="/notaccept" element={<NotAcceptPage/>}/>
            <Route path="/analysispage" element={<ClickAnalysis />} />
            <Route path="/interest/:data" element={<Interest />} />
            {/* Render Predictions route only if user is logged in */}

            <Route element={<PrivateRoute token={token}/>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/registered" element={<RegisterDashboard />} />
              <Route path="/editregister/:id" element={<EditRegisteredData/>}/>
              <Route path="/registered" element={<RegisterDashboard />} />
         
            </Route>
            {/* <Route path="/predictions" 
element={<PublicRoute>
  <Predictions />
</PublicRoute>}/> */}

            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

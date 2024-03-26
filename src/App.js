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
import { Pages } from "./page/Pages";
import AdminLogin from "./page/AdminLogin";
import { RegisterDashboard } from "./page/RegisterDashboard";
import { PredictionData } from "./page/PredictionDashboard";
import { Dashboard } from "./page/Dashboard";
import { EditRegisteredData } from "./page/EditRegisteredData";
import { NotAcceptPage } from "./page/NotAcceptPage";
import { PrivateRoute } from "./page/PrivateRoute";
function App() {
  const token = localStorage.getItem("admin_token");
  console.log(token)
  return (
    <div className="App">
      <Router>
        {/* <Headers/> */}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/logins" element={<Login />} />
            <Route path="/adminlogin" element={<AdminLogin />} />  
            <Route path="/notaccept" element={<NotAcceptPage/>}/>
            <Route path="/predictiondata" element={<PredictionData />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/interest/:data" element={<Interest />} />
<Route element={<PrivateRoute token={token}/>}>
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/registered" element={<RegisterDashboard />} />
<Route path="/editregister/:id" element={<EditRegisteredData/>}/>
<Route path="/registered" element={<RegisterDashboard />} />
</Route>
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

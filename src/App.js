
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/register"element={<Register/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;

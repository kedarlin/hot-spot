import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Newcase from './pages/Newcase/Newcase';
import Hotspots from './pages/Hotspots/Hotspots';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/newcase' element={<Newcase />} />
          <Route path='/hotspots' element={<Hotspots />} />
        </Routes>
    </Router>
      
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Navbar from './Components/Navbar';
import NavbarTop from './Components/Navbar-top';
import ScreenSize from './Components/ScreenSize';

function App() {
  const screenSize = ScreenSize();
  
  return (
    <div className="h-screen bg-zinc-800">
      <Router>
        <Navbar />
        { screenSize.winWidth <= 767 ? <NavbarTop /> : <></> }
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

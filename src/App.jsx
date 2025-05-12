import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Discover from '../pages/Discover';
import Album from '../pages/Album';
import Artist from '../pages/Artist';
import About from '../components/About';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Premium from '../pages/Premium';
import Profile from '../pages/Profile';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Discover" element={<Discover/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/song/:id" element={<Album />} /> 
        <Route path="/Artist" element={<Artist />} />
        <Route path="/ContactUs" element={<ContactUs/>}></Route>
        <Route path="/Premium" element={<Premium />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;

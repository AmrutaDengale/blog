import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';


function App() {
  return (
    < >
    <Header/>
    <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/about" element={<About />} />
   <Route path="/services" element={<Services />} />
   <Route path="/blog" element={<Blog />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   
   
     
    </Routes>
    <Footer/>
    </>
  );
}

export default App;

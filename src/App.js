
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';

import Team from './components/Team/Team';
import Review from './components/Review/Review';
import Footer from './components/Footer/Footer';
import Course from './components/Course/Course';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
       
       
          <Route path="aboutus" element={<About />} />
          <Route path="courses" element={<Course />} />
          <Route path="team" element={<Team />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> 

         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

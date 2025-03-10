import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import VideoPlayer from './VideoPlayer';
import Title from './MainTitle';
import Next from './Next';
import Lajmet from './Lajmet';
import Marquee from './Marquee';
import SofaScoreSidebar from './SofaScoreSidebar';
import Trofet from "./Trofet";
import Footer from "./Footer";
import Skuadra from './Skuadra';  // Import Skuadra Component
import Historia from './Historia';  // Import Historia Component
import Galeria from './Galeria';  // Import Galeria Component
import Sponzor from './Sponzor';
import Contact from "./Contact"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar open/close
  };

  return (
    <Router>
      <div>
        <VideoPlayer />
        <Navbar toggleSidebar={toggleSidebar} /> {/* Pass toggle function */}
        <SofaScoreSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Pass toggleSidebar */}
        <Title />
        <Next />
        <Lajmet />
        <Marquee />
        <Trofet />


        {/* Routes Setup */}
        <Routes>
          <Route path="/skuadra" element={<Skuadra />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </div>
      <Sponzor/>
      <Contact/>
      <Footer />
    </Router>
  );
}

export default App;

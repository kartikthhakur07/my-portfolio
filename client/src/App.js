import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PhotoStrip from './components/PhotoStrip';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PhotoStrip />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

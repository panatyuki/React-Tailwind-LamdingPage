import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InfoOne from "./components/InfoOne";
import InfoTwo from "./components/InfoTwo";
import Cta from "./components/CTA";
import Testimonials from "./components/Testimonials";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InfoOne />
      <InfoTwo />
      <Cta />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;


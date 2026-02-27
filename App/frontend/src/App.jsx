import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Causes from "./components/Causes";
import Footer from "./components/Footer";
import Brand from "./components/brand";
import RamadanCalendar from "./components/specialDays";
import OrnamentDivider from "./components/OrnamentDivider";
import "./App.css"   
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <RamadanCalendar/>
      <OrnamentDivider />
      <Causes id="causes"/>
      <Brand />
      <Footer />
    </>
  );
}

export default App;

import AboutMeSection from "./components/AboutMeSection";
import Applayout from "./components/Applayout";
import BenefitSection from "./components/BenefitSection";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <Applayout>
      <Nav />
      <HeroSection />
      <BenefitSection />
      <AboutMeSection />
    </Applayout>
  );
}

export default App;

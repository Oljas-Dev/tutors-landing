import AboutMeSection from "./components/AboutMeSection";
import Applayout from "./components/Applayout";
import BenefitSection from "./components/BenefitSection";
import Calendar from "./components/Calendar";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";

function App() {
  return (
    <Applayout>
      <Nav />
      <HeroSection />
      <BenefitSection />
      <AboutMeSection />
      <FAQ />
      <Calendar />
    </Applayout>
  );
}

export default App;

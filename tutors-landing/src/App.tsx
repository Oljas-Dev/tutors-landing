import AboutMeSection from "./components/AboutMeSection";
import Applayout from "./components/Applayout";
import BenefitSection from "./components/BenefitSection";
import Calendar from "./components/Calendar";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import { LandingProvider } from "./context/LandingContext";

function App() {
  return (
    <LandingProvider>
      <Applayout>
        <Nav />
        <HeroSection />
        <BenefitSection />
        <AboutMeSection />
        <FAQ />
        <Calendar />
      </Applayout>
    </LandingProvider>
  );
}

export default App;

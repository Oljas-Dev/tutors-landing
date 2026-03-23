import { Toaster } from "react-hot-toast";
import AboutMeSection from "./components/AboutMeSection";
import Applayout from "./components/Applayout";
import BenefitSection from "./components/BenefitSection";
// import Koalender from "./components/Koalender";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import TutorCalendar from "./components/TutorCalendar";
import { CalendarProvider } from "./context/CalendarContext";
import { LandingProvider } from "./context/LandingContext";

function App() {
  return (
    <LandingProvider>
      <CalendarProvider>
        <Applayout>
          <Nav />
          <HeroSection />
          <BenefitSection />
          <AboutMeSection />
          <FAQ />
          <TutorCalendar />
          {/* <Koalender /> */}
        </Applayout>
        <Toaster
          toastOptions={{
            style: {
              fontSize: "20px",
            },
          }}
        />
      </CalendarProvider>
    </LandingProvider>
  );
}

export default App;

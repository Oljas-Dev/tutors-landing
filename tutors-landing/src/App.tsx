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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TutorCalendarForm from "./features/CalendarForm";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingProvider>
        <CalendarProvider>
          <Applayout>
            <Nav />
            <HeroSection />
            <BenefitSection />
            <AboutMeSection />
            <FAQ />
            <TutorCalendar />
            <TutorCalendarForm />
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
    </QueryClientProvider>
  );
}

export default App;

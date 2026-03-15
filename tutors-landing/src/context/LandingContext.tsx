import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import speak from "../../public/speak.svg";
import goalFlag from "../../public/goal-flag.svg";
import trendUp from "../../public/trend-up.svg";
import type { offerOptionsProps } from "../types/interfaces";

interface LandingProps {
  currentSlide: number;
  setCurrentSlide: Dispatch<SetStateAction<number>>;
  currentOfferSlide: number;
  setCurrentOfferSlide: Dispatch<SetStateAction<number>>;
  offerOptions: offerOptionsProps[];
}

const LandingContext = createContext({} as LandingProps);

function LandingProvider({ children }: { children: ReactNode }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);

  const offerOptions = [
    {
      heading: "Free trial lesson",
      duration: "45min",
      textArr: [
        {
          icon: speak,
          text: "Speaking evaluation",
        },
        {
          icon: goalFlag,
          text: "Personalized improvement plan",
        },
        {
          icon: trendUp,
          text: "Clear next steps",
        },
      ],
    },
    {
      heading: "Speaking lesson",
      duration: "45min",
      textArr: [
        {
          icon: speak,
          text: "Intensive practice",
        },
        {
          icon: goalFlag,
          text: "Reaching plans goals",
        },
        {
          icon: trendUp,
          text: "Visible progress",
        },
      ],
    },
  ];

  return (
    <LandingContext.Provider
      value={{
        currentSlide,
        setCurrentSlide,
        currentOfferSlide,
        setCurrentOfferSlide,
        offerOptions,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
}

function useLanding() {
  const context = useContext(LandingContext);

  if (context === undefined)
    throw new Error("The LandingContext cannot be used outside its provider");

  return context;
}

export { LandingProvider, useLanding };

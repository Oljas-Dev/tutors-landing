import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type EventsTypes = Record<
  number,
  {
    time: string[];
    duration: string;
    id: string;
  }
>;

interface CalendarProps {
  events: EventsTypes;
  currentMonth: Date;
  currentBookingDay: number;
  showBookingForm: boolean;
  setCurrentBookingDay: Dispatch<SetStateAction<number>>;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
  setShowBookingForm: Dispatch<SetStateAction<boolean>>;
  daysInMonth: number;
  firstDayOfMonth: number;
  daysOfNextMonth: number;
  lastDaysPreviousMonth: number[];
  isToday: (i: number) => boolean;
  handleNextMonth: () => void;
  handlePreviousMonth: () => void;
}

const CalendarContext = createContext({} as CalendarProps);

function CalendarProvider({ children }: { children: ReactNode }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentBookingDay, setCurrentBookingDay] = useState(0);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const today = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const events = {
    23: {
      time: ["9:00 - 10:00"],
      duration: "one hour",
      id: "23.3",
    },
    24: {
      time: [
        "10:00 - 11:00",
        "11:00 - 12:00",
        "15:00 - 16:00",
        "15:00 - 16:00",
        "15:00 - 16:00",
        "15:00 - 16:00",
      ],
      duration: "one hour",
      id: "24.3",
    },
    29: {
      time: ["11:00 - 12:00"],
      duration: "one hour",
      id: "29.3",
    },
    2: {
      time: ["11:00 - 12:00"],
      duration: "one hour",
      id: "2.4",
    },
  };

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay();

  // Logic to show the days of the next Month in current view
  const firstDayOfNextMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1,
  ).getDay();

  const daysOfNextMonth = 7 - firstDayOfNextMonth;

  // Logic to show the days of the previous Month in current view
  const daysInPreviousMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    0,
  ).getDate();

  const lastDaysPreviousMonth = Array.from(
    {
      length: daysInPreviousMonth,
    },
    (_, i) => i + 1,
  ).slice(-firstDayOfMonth);

  // Logic to show the current day
  function isToday(i: number) {
    if (
      today === i &&
      month === currentMonth.getMonth() &&
      year === currentMonth.getFullYear()
    ) {
      return true;
    } else return false;
  }

  // function isPast(date: string) {
  //   return new Date(date) < new Date();
  // }

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };
  const handlePreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  return (
    <CalendarContext.Provider
      value={{
        events,
        currentMonth,
        showBookingForm,
        currentBookingDay,
        setCurrentBookingDay,
        setCurrentMonth,
        setShowBookingForm,
        daysInMonth,
        daysOfNextMonth,
        firstDayOfMonth,
        handleNextMonth,
        handlePreviousMonth,
        isToday,
        lastDaysPreviousMonth,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
}

function useCalendar() {
  const context = useContext(CalendarContext);

  if (context === undefined)
    throw new Error("Calendar context cannot be used outside Provider.");

  return context;
}

export { CalendarProvider, useCalendar };

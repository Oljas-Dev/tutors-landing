import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

interface CalendarProps {
  currentMonth: Date;
  setCurrentMonth: Dispatch<SetStateAction<Date>>;
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

  const today = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

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
        currentMonth,
        setCurrentMonth,
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

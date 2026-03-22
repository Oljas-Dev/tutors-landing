import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useCalendar } from "../../context/CalendarContext";

export default function MonthsSlider() {
  const { handlePreviousMonth, currentMonth, handleNextMonth } = useCalendar();
  return (
    <div className="calendar-months-slider flex m-center">
      <ChevronLeft size={20} className="cursor" onClick={handlePreviousMonth} />
      <h2>
        {currentMonth.toLocaleString("default", { month: "long" })}{" "}
        {currentMonth.getFullYear()}
      </h2>
      <ChevronRight size={20} className="cursor" onClick={handleNextMonth} />
    </div>
  );
}

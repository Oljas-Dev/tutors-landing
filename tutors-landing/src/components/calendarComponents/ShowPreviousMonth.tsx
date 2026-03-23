import { useCalendar } from "../../context/CalendarContext";

export default function ShowPreviousMonth() {
  const { firstDayOfMonth, lastDaysPreviousMonth, handlePreviousMonth } =
    useCalendar();
  return (
    <>
      {firstDayOfMonth !== 0 &&
        lastDaysPreviousMonth.map((day, i) => (
          <div
            key={i + 1}
            className="mt-md opacity-03"
            onClick={handlePreviousMonth}
          >
            {day}
          </div>
        ))}
    </>
  );
}

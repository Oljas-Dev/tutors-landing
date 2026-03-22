import { useCalendar } from "../../context/CalendarContext";

export default function ShowCurrentMonth() {
  const { daysInMonth, isToday } = useCalendar();
  return (
    <>
      {Array.from({ length: daysInMonth }).map((_, i) => (
        <div
          key={i + 1}
          className={`${isToday(i + 1) ? "currentDay" : ""}
                  mt-1`}
        >
          {i + 1}
        </div>
      ))}
    </>
  );
}

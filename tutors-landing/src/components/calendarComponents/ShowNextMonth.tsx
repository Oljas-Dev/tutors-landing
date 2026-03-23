import { useCalendar } from "../../context/CalendarContext";

export default function ShowNextMonth() {
  const { daysOfNextMonth, handleNextMonth } = useCalendar();
  return (
    <>
      {daysOfNextMonth < 7 &&
        Array.from({ length: daysOfNextMonth }).map((_, i) => (
          <div key={i} className="mt-md opacity-03" onClick={handleNextMonth}>
            {i + 1}
          </div>
        ))}
    </>
  );
}

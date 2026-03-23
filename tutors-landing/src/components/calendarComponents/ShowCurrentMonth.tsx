import { useCalendar } from "../../context/CalendarContext";

export default function ShowCurrentMonth() {
  const {
    daysInMonth,
    isToday,
    currentMonth,
    setShowBookingForm,
    events,
    setCurrentBookingDay,
  } = useCalendar();

  const daysArr = Array.from({ length: daysInMonth }, (_, i) =>
    createLessonsId(i),
  );

  function createLessonsId(i: number) {
    return {
      id: (i + 1).toString() + "." + (currentMonth.getMonth() + 1).toString(),
    };
  }

  function handleBookingForm(condition: boolean, day: number) {
    if (condition) {
      setShowBookingForm(true);
      setCurrentBookingDay(day);
    }
  }

  // console.log();

  return (
    <>
      {daysArr.map((day, i) => (
        <div
          key={i + 1}
          className={`
                  ${isToday(i + 1) ? "currentDay" : ""}
                  ${events[i + 1] && events[i + 1].id === day.id ? "bookDay" : ""}
                  mt-md pos-relative`}
          onClick={() =>
            handleBookingForm(
              events[i + 1] && events[i + 1].id === day.id,
              i + 1,
            )
          }
        >
          {i + 1}
        </div>
      ))}
    </>
  );
}

import { useCalendar } from "../context/CalendarContext";
import DaySchedule from "../ui/DaySchedule";

export default function TutorCalendarForm() {
  const { lessonsScheduleArray, from, to, lessonDuration, slots } =
    useCalendar();
  const week = "23.03.2026 - 29.03.2026";

  function handleCalendarForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newSchedule = {
      time: [`${from} - ${to}:00`],
      duration: lessonDuration,
      id: lesson.id,
    };

    console.log("new schedule", newSchedule);
  }

  return (
    <form onSubmit={handleCalendarForm}>
      <div className="form-schedule-week">
        <h2>Plan your lessons from {week}</h2>
      </div>
      {lessonsScheduleArray.map((day, i) => (
        <DaySchedule weekday={day} key={i} />
      ))}
      <button type="submit">submit</button>
    </form>
  );
}

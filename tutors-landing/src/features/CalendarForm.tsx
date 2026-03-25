import { weekdays } from "../helpers/variables";
import DaySchedule from "../ui/DaySchedule";

export default function TutorCalendarForm() {
  const week = "23.03.2026 - 29.03.2026";

  function handleCalendarForm(e) {
    e.preventDefault();

    console.log("form submitted");
  }

  return (
    <form onSubmit={handleCalendarForm}>
      <div className="form-schedule-week">
        <h2>Plan your lessons from {week}</h2>
      </div>
      {weekdays.map((day, i) => (
        <DaySchedule weekday={day} key={i} />
      ))}
      <button type="submit">submit</button>
    </form>
  );
}

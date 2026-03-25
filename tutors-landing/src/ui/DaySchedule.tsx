import { useState } from "react";
import FromToElement from "./FromToElement";
import { useCalendar } from "../context/CalendarContext";

export default function DaySchedule({ weekday }: { weekday: object }) {
  const { day, lessons } = weekday;
  const [showSchedule, setShowSchedule] = useState(false);

  const { lessonsScheduleArray } = useCalendar();

  function addFromTo() {
    const id = Math.random() * 1000;
    lessons.push({ id: id.toString() });
  }

  function deleteLesson(id: string) {}

  return (
    <div className="form-schedule-day">
      <div className="form-schedule-day-header flex">
        <h3>{day}</h3>
        <div
          className="toggle"
          onClick={() => setShowSchedule((schedule) => !schedule)}
        >
          toggle
        </div>
      </div>

      {showSchedule && lessons.map((_, i) => <FromToElement key={i} />)}
      {showSchedule && (
        <button
          type="button"
          className="btn text-md mt-1"
          onClick={() => addFromTo()}
        >
          add more +
        </button>
      )}
    </div>
  );
}

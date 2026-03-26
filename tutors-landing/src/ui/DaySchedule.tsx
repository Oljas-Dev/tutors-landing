import { useState } from "react";
import FromToElement from "./FromToElement";

export default function DaySchedule({ weekday }: { weekday: object }) {
  const { day, date, lessons } = weekday;
  const [showSchedule, setShowSchedule] = useState(false);

  function addFromTo() {
    const id = Math.random() * 1000;
    lessons.push({
      time: "",
      duration: "",
      id: id.toString(),
    });
  }

  return (
    <div className="form-schedule-day">
      <div className="form-schedule-day-header flex">
        <h3>{`${day} - ${date}`}</h3>
        <div
          className="toggle"
          onClick={() => setShowSchedule((schedule) => !schedule)}
        >
          toggle
        </div>
      </div>

      {showSchedule &&
        lessons.map((lesson, i) => (
          <FromToElement lessons={lessons} lesson={lesson} key={i} />
        ))}
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

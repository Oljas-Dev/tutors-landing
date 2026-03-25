import { useState } from "react";
import FromToElement from "./FromToElement";
import { useCalendar } from "../context/CalendarContext";

export default function DaySchedule({ weekday }: { weekday: string }) {
  const [showSchedule, setShowSchedule] = useState(false);

  const { fromToArray } = useCalendar();

  function addFromTo() {
    const id = Math.random() * 1000;
    fromToArray.push({ id: id.toString() });
  }

  return (
    <div className="form-schedule-day">
      <div className="form-schedule-day-header flex">
        <h3>{weekday}</h3>
        <div
          className="toggle"
          onClick={() => setShowSchedule((schedule) => !schedule)}
        >
          toggle
        </div>
      </div>

      {showSchedule && fromToArray.map((_, i) => <FromToElement key={i} />)}
      <button onClick={() => addFromTo()}>add more +</button>
    </div>
  );
}

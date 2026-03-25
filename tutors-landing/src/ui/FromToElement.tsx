import { useState } from "react";

type durationTypes = "30min" | "45min" | "oneHour";

export default function FromToElement() {
  const [lessonDuration, setLessonDuration] =
    useState<durationTypes>("oneHour");
  return (
    <div className="schedule-from-to flex">
      <div className="schedule-duration">
        <label htmlFor="durationOptions">Lesson duuration</label>
        <select
          id="durationOptions"
          onChange={(e) => setLessonDuration(e.target.value)}
        >
          <option value="30min">30 min.</option>
          <option value="45min">45 min.</option>
          <option value="oneHour">60 min.</option>
        </select>
      </div>

      <div className="schedule-input flex">
        <label htmlFor="">From</label>
        <input type="text" id="fromTime" placeholder="0:00 AM" />
      </div>

      <div className="schedule-input flex">
        <label htmlFor="untillTime">To</label>
        <input type="text" id="untillTime" placeholder="1:00 AM" />
      </div>
    </div>
  );
}

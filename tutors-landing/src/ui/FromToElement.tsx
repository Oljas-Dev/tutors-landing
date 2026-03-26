import { useCalendar } from "../context/CalendarContext";

export default function FromToElement({
  lessons,
  lesson,
}: {
  lessons: object[];
  lesson: object;
}) {
  const { from, setLessonDuration, setFrom, to } = useCalendar();

  // console.log(lessons);

  function deleteLesson(id: string) {
    const index = lessons.findIndex((l) => l.id === id);
    lessons.splice(index, 1);
    console.log("deleted");
  }

  return (
    <>
      <div className="schedule-from-to flex">
        <div className="schedule-duration schedule-input flex">
          <label htmlFor="durationOption" className="text-md">
            Lesson duration
          </label>
          <select
            id="durationOptions"
            className="text-md"
            onChange={(e) => setLessonDuration(e.target.value)}
            defaultValue={"oneHour"}
          >
            <option value="30min">30 min.</option>
            <option value="45min">45 min.</option>
            <option value="oneHour">60 min.</option>
          </select>
        </div>

        <div className="schedule-input flex">
          <label htmlFor="" className="text-md">
            From
          </label>
          <input
            type="text"
            id="fromTime"
            placeholder="0:00 AM"
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="schedule-input flex">
          <label htmlFor="untillTime" className="text-md">
            To
          </label>
          <input
            type="text"
            id="untillTime"
            placeholder="1:00 AM"
            defaultValue={Number(from.substring(0, 1)) > 0 ? to : ""}
          />
        </div>
        <div className="text-md" onClick={() => deleteLesson(lesson.id)}>
          -
        </div>
      </div>
    </>
  );
}

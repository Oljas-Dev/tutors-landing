import { ArrowLeft } from "react-bootstrap-icons";
import { useCalendar } from "../context/CalendarContext";
import { useState } from "react";
import ConfirmationBooking from "./ConfirmationBooking";

export default function LessonsBookForm() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [lessonTime, setLessonTime] = useState(0);
  const { setShowBookingForm, events, currentBookingDay, currentMonth } =
    useCalendar();

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentLesson = events[currentBookingDay];
  const monthStr = currentMonth.toLocaleString("default", { month: "long" });
  const lessonDate =
    currentLesson.id.length < 4
      ? currentLesson.id.substring(0, 1)
      : currentLesson.id.substring(0, 2);

  const d = new Date(
    `${monthStr} ${lessonDate}, ${currentMonth.getFullYear()}`,
  );
  const day = d.getDay();

  const dayStr = weekday[day];

  function handleConfirmShow(i: number) {
    setShowConfirm(true);
    setLessonTime(i);
  }

  //   console.log(d);
  return (
    <div className={`book-lesson-form flex flex-col`}>
      {!showConfirm ? (
        <>
          <h3>
            Book lesson on {dayStr}, {monthStr} {lessonDate}
          </h3>
          <div className="duration flex flex-col">
            <h4>Duration</h4>
            <div className="book-form-info-container">
              <p>{currentLesson.duration}</p>
            </div>
          </div>
          <div className="time-slots flex flex-col">
            <h4>Available time</h4>
            {currentLesson.time.map((slot, i) => (
              <div
                key={i}
                className="book-form-info-container"
                onClick={() => handleConfirmShow(i)}
              >
                <p>{slot}</p>
              </div>
            ))}
          </div>
          <button className="btn" onClick={() => setShowBookingForm(false)}>
            <ArrowLeft size={12} /> back
          </button>
        </>
      ) : (
        <ConfirmationBooking
          currentLesson={currentLesson}
          dayStr={dayStr}
          lessonDate={lessonDate}
          lessonTime={lessonTime}
          monthStr={monthStr}
          setShowConfirm={setShowConfirm}
        />
      )}
    </div>
  );
}

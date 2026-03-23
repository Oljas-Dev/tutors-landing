import { useState, type Dispatch, type SetStateAction } from "react";
import { ArrowLeft } from "react-bootstrap-icons";
import { useCalendar } from "../context/CalendarContext";
import toast from "react-hot-toast";

interface currentLessonTypes {
  time: string[];
}

export default function ConfirmationBooking({
  dayStr,
  monthStr,
  lessonDate,
  currentLesson,
  lessonTime,
  setShowConfirm,
}: {
  dayStr: string;
  monthStr: string;
  lessonDate: string;
  currentLesson: currentLessonTypes;
  lessonTime: number;
  setShowConfirm: Dispatch<SetStateAction<boolean>>;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requiredName, setRequiredName] = useState(false);
  const [requiredEmail, setRequiredEmail] = useState(false);

  const { setShowBookingForm } = useCalendar();

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function handleConfirm() {
    if (name === "") {
      setRequiredName(true);
      return;
    } else setRequiredName(false);

    if (!regex.test(email)) {
      setRequiredEmail(true);
      return;
    } else setRequiredEmail(false);

    const newBookingInfo = {
      studentsName: name,
      email,
    };
    console.log(newBookingInfo);
    toast("Booking confirmation message was sent to your email");
    setShowBookingForm(false);
  }
  return (
    <div className="time-slots confirmation flex flex-col">
      <h2>Confirm booking</h2>
      <p>
        Confirm your lesson on {dayStr}, {monthStr} {lessonDate} from{" "}
        {currentLesson.time[lessonTime]}
      </p>
      <div className="new-user-data flex flex-col">
        <div className="flex flex-col inputs">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            placeholder="your name"
            id="username"
            className={`${requiredName ? "required" : "correct"}`}
            onChange={(e) => setName(e.target.value)}
          />
          {requiredName ? (
            <p className="errorMessage">Your name is required</p>
          ) : (
            ""
          )}
        </div>
        <div className="flex flex-col inputs">
          <label htmlFor="userEmail">Email</label>
          <input
            type="email"
            placeholder="your email"
            id="userEmail"
            className={`${requiredEmail ? "required" : ""}`}
            onChange={(e) => setEmail(e.target.value)}
          />
          {requiredEmail ? (
            <p className="errorMessage">Please enter correct email</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex btn-confirm-group">
        <button className="btn" onClick={() => setShowConfirm(false)}>
          <ArrowLeft size={12} /> back
        </button>
        <button className="btn btn-green" onClick={() => handleConfirm()}>
          confirm
        </button>
      </div>
    </div>
  );
}

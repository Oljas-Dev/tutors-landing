import ShowPreviousMonth from "./calendarComponents/ShowPreviousMonth";
import ShowCurrentMonth from "./calendarComponents/ShowCurrentMonth";
import ShowNextMonth from "./calendarComponents/ShowNextMonth";
import MonthsSlider from "./calendarComponents/MonthsSlider";
import WeekDays from "./calendarComponents/WeekDays";
import Stripes from "../ui/Stripes";
import { useCalendar } from "../context/CalendarContext";
import LessonsBookForm from "./LessonsBookForm";

export default function TutorCalendar() {
  const { showBookingForm } = useCalendar();
  return (
    <>
      {!showBookingForm ? (
        <>
          <div id="tutorCalendar" className="calendar flex flex-col">
            <div className="calendar-header flex flex-col">
              <div className="calendar-img"></div>
              <div className="calendar-text">Book a lesson with Anne</div>
            </div>
            <div className="calendar-main flex flex-col">
              <MonthsSlider />
              <div className="calendar-dates flex flex-col">
                <WeekDays />
                <div className="calendar-days">
                  <ShowPreviousMonth />
                  <ShowCurrentMonth />
                  <ShowNextMonth />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LessonsBookForm />
      )}
      <Stripes />
    </>
  );
}

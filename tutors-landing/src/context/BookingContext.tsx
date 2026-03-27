import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { createContext, useContext, type ReactNode } from "react";
import { getHoursAndMinutes } from "../helpers/functions";

dayjs.extend(utc);

type Exception =
  | {
      type: "exclude";
      date: string; // "YYYY-MM-DD"
    }
  | {
      type: "override";
      date: string;
      startTime: string;
      endTime: string;
    };

type Slot = {
  id: string;
  tutorId: string;
  start: string; // ISO UTC datetime
  end: string; // ISO UTC datetime
  duration: number;
  buffer?: number;
  status: string;
  //   status: "available" | "booked" | "blocked";
};

interface BookingTypes {
  availableSlots: Slot[];
}

type RecurringFormState = {
  startDate: string;
  endDate: string;
  selectedDays: number[];
  startTime: string;
  endTime: string;
  duration: 30 | 60;
  buffer: number;
  exceptions?: Exception[];
};

export type WeekFormState = {
  weekStart: string; // ISO date (Monday)
  selectedDays: number[]; // [1, 3, 5] => Mon, Wed, Fri
  startTime: string;
  endTime: string;
  duration: 30 | 60;
  buffer: number;
};

const BookingContext = createContext({} as BookingTypes);

function BookingContextProvider({ children }: { children: ReactNode }) {
  const formState: WeekFormState = {
    weekStart: "2026-03-30",
    selectedDays: [1],
    startTime: "09:00",
    endTime: "12:00",
    duration: 30,
    buffer: 10,
  };

  const bookedSlots: Slot[] = [
    {
      id: "b1",
      tutorId: "tutor-1",
      start: "2026-03-30T09:40:00.000Z",
      end: "2026-03-30T11:10:00.000Z",
      duration: 30,
      status: "booked",
    },
  ];

  const slots: Slot[] = [];

  // generate free slots in schedule
  function generateSlots(form: WeekFormState): Slot[] {
    const weekStart = dayjs.utc(form.weekStart);

    form.selectedDays.forEach((day) => {
      const currentDay = weekStart.add(day - 1, "day").format("YYYY-MM-DD");

      let currentTime = dayjs.utc(`${currentDay}T${form.startTime}:00`);
      const endTime = dayjs.utc(`${currentDay}T${form.endTime}:00`);

      while (
        currentTime.add(form.duration, "minute").isBefore(endTime) ||
        currentTime.add(form.duration, "minute").isSame(endTime)
      ) {
        const slotEnd = currentTime.add(form.duration, "minute");

        // Generation breaks if time left is not enough for a whole lesson
        if (slotEnd.isAfter(endTime)) break;

        slots.push({
          id: crypto.randomUUID(),
          tutorId: "tutor-1",
          start: currentTime.toISOString(),
          end: slotEnd.toISOString(),
          duration: form.duration,
          buffer: form.buffer || 0,
          status: "available",
        });

        currentTime = slotEnd.add(form.buffer ?? 0, "minute");
      }
    });
    return slots;
  }

  const generatedSlots = generateSlots(formState);

  function isOverlapping(slot: Slot, booked: Slot) {
    return (
      dayjs(slot.start).isBefore(dayjs(booked.end)) &&
      dayjs(slot.end).isAfter(dayjs(booked.start))
    );
  }

  function filterAvailableSlots(slots: Slot[], bookedSlots: Slot[]): Slot[] {
    const slotsWithStatus = slots.map((slot) => {
      const isBooked = bookedSlots.some((booked) =>
        isOverlapping(slot, booked),
      );

      return {
        ...slot,
        status: isBooked ? "booked" : "available",
      };
    });
    return slotsWithStatus;
  }

  const availableSlots = filterAvailableSlots(generatedSlots, bookedSlots);

  const testTiming = (timeArr: Slot[]) => {
    const res = timeArr.map(
      (slot) =>
        " from " +
        getHoursAndMinutes(new Date(Date.parse(slot.start))) +
        " till " +
        getHoursAndMinutes(new Date(Date.parse(slot.end))),
    );

    return res;
  };

  const isPast = dayjs().isAfter(dayjs("2026-03-27T16:54:00.000Z"));

  console.log(isPast);
  console.log(availableSlots);

  return (
    <BookingContext.Provider value={availableSlots}>
      {children}
    </BookingContext.Provider>
  );
}

function useBookings() {
  const context = useContext(BookingContext);

  if (context === undefined)
    throw new Error("Context cannot be used outside Provider");

  return context;
}

export { BookingContextProvider, useBookings };

const getHoursAndMinutes = (time: Date) => {
  const formattedTime = Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(time);

  return formattedTime;
};

export { getHoursAndMinutes };

export function updateTime(time) {
  const utc = time.getUTCHours();
  const timeHoursIn12HrFormat = utc >= 13 ? utc % 12 : utc;
  const timeampm = utc >= 12 ? "PM" : "AM";
  const timeMinutes = "0" + time.getUTCMinutes();
  return timeHoursIn12HrFormat + ":" + timeMinutes.substr(-2) + " " + timeampm;
}
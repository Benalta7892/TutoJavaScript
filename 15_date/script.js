function addDays(date, days) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

const MONTHS = 1;
const DAYS = 2;
const YEARS = 0;

function addInterval(date, interval) {
  const parts = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
  ];
  for (const [unit, value] of Object.entries(interval)) {
    parts[unit] += value;
  }
  return new Date(...parts);
}

const today = new Date();
const future = addInterval(today, {
  [MONTHS]: 2,
  [DAYS]: 1,
});
console.log(today);
console.log(future);

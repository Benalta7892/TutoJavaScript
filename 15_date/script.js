function addDays(date, days) {
  const newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

const MONTHS = "months";
const DAYS = "days";
const YEARS = "years";

function addInterval(date, n, unit) {
  const newDate = new Date(date.getTime());
  switch (unit) {
    case DAYS:
      newDate.setDate(newDate.getDate() + n);
      break;
    case MONTHS:
      newDate.setMonth(newDate.getMonth() + n);
      break;
    case YEARS:
      newDate.setFullYear(newDate.getFullYear() + n);
      break;
  }
  return newDate;
}

const today = new Date();
const future = addInterval(today, 3, YEARS);
console.log(today);
console.log(future);

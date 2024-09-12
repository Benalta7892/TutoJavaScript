const weekStartsOn = 1;

/**
 * Renvoie la date en début de semaine
 * @param {Date} date
 * @returns {Date}
 */
export function startOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Renvoie la date en fin de semaine
 * @param {Date} date
 * @returns {Date}
 */
export function endOfWeek(date) {
  const d = new Date(date);
  const day = d.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  d.setDate(d.getDate() + diff);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Renvoie la date en fin de mois
 * @param {Date} date
 * @returns {Date}
 */
export function endOfMonth(date) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Ajoute plusieurs jours à une date
 * @param {Date} date
 * @param {number} n
 * @returns {Date}
 */
export function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

/**
 * Renvoie les jours entre deux dates
 * @param {Date} start
 * @param {Date} end
 * @returns {Date[]}
 */
export function daysBetween(start, end) {
  if (start > end) {
    throw new Error("La date de début ne peut pas être supérieur à la date de fin");
  }
  const days = [];
  let cursor = new Date(start);
  cursor.setHours(0, 0, 0, 0);
  while (cursor <= end) {
    days.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return days;
}

import { Events } from "./data.js";
import {
  addDays,
  dayId,
  daysBetween,
  diffInDays,
  endOfMonth,
  endOfWeek,
  minDates,
  startOfWeek,
} from "./functions/date.js";

/**
 * @typedef {{name: string, start: Date, end: Date, fullDay?: boolean}} CalendarEvent
 */

const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const timeFormatter = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });

class Calendar {
  /** @type {Map<string, CalendarEvent[]>} */
  #eventsMap = new Map();

  /**
   *
   * @param {HTMLElement} root // Element HTML dans lequel afficher le calendrier
   * @param {CalendarEvent[]} events // Liste des événements à afficher
   * @param {number} month Mois du calendrier (0 pour Janvier)
   * @param {number} year Année du calendrier
   */
  constructor(root, events, month, year) {
    this.#fillEventsMap(events);
    const startOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
    const start = startOfWeek(startOfMonth);
    const end = endOfWeek(endOfMonth(startOfMonth));
    const days = daysBetween(start, end);
    root.innerHTML = `
    <table class="calendar">
      <thead>
        <tr>
          ${Array.from({ length: 7 }, (_, k) => `<th>${dayFormatter.format(addDays(start, k))}</th>`).join("")}
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>`;
    const tbody = root.querySelector("tbody");
    let tr = document.createElement("tr");
    for (const day of days) {
      tr.append(this.#buildCell(day, month));
      if (day.getDay() === 0) {
        tbody.append(tr);
        tr = document.createElement("tr");
      }
    }
  }

  /**
   * Construit l'élément qui représente un jour
   * @param {Date} date
   * @param {number} month
   * @returns {HTMLTableCellElement}
   */
  #buildCell(date, month) {
    const td = document.createElement("td");
    const isCurrentMonth = date.getMonth() === month;

    td.innerHTML = `
    <div class="calendar_cell">
      <div class="calendar_date ${isCurrentMonth ? "" : "calendar__date-diff"}">${date.getDate()}</div>
      <div class="calendar_events"></div>
    </div>`;
    const container = td.querySelector(".calendar_events");
    const idDate = dayId(date);
    const events = this.#eventsMap.get(idDate) ?? [];
    for (const event of events) {
      // On est au début de l'événement sur plusieurs jours
      if (event.fullDay && (idDate === dayId(event.start) || date.getDay() === 1)) {
        const days = diffInDays(minDates([event.end, endOfWeek(date)]), date);
        container.insertAdjacentHTML(
          "beforeend",
          `<div class="calendar_event calendar_event-fullday" style="--days:${days}">
            ${event.name}
          </div>`
        );
      }
      if (event.fullDay) {
        continue;
      }
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="calendar_event calendar_event-hour">
          <span>${timeFormatter.format(event.start)} - ${event.name}</span>
        </div>`
      );
    }
    return td;
  }

  /**
   * @param {CalendarEvent[]} events
   */
  #fillEventsMap(events) {
    const sortedEvents = [...events].sort((a, b) => (a.start < b.start ? -1 : 1));
    for (const event of sortedEvents) {
      const days = daysBetween(event.start, event.end);
      for (const day of days) {
        const id = dayId(day);
        this.#eventsMap.set(id, [...(this.#eventsMap.get(id) ?? []), event]);
      }
    }
  }
}

const c = new Calendar(document.getElementById("app"), Events, new Date().getMonth(), new Date().getFullYear());
console.log(c);

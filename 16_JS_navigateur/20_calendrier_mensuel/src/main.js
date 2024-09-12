import { Events } from "./data.js";
import { addDays, daysBetween, endOfMonth, endOfWeek, startOfWeek } from "./functions/date.js";

/**
 * @typedef {{name: string, start: Date, end: Date, fullDay?: boolean}} CalendarEvent
 */

const dayFormatter = new Intl.DateTimeFormat(undefined, { weekday: "long" });

class Calendar {
  /**
   *
   * @param {HTMLElement} root // Element HTML dans lequel afficher le calendrier
   * @param {CalendarEvent[]} events // Liste des événements à afficher
   * @param {number} month Mois du calendrier (0 pour Janvier)
   * @param {number} year Année du calendrier
   */
  constructor(root, events, month, year) {
    const startOfMonth = new Date(year, month, 1, 0, 0, 0, 0);
    const start = startOfWeek(startOfMonth);
    const end = endOfWeek(endOfMonth(startOfMonth));
    console.log(daysBetween(start, end));
    root.innerHTML = `
    <table>
      <thead>
        <tr>
          ${Array.from({ length: 7 }, (_, k) => `<th>${dayFormatter.format(addDays(start, k))}</th>`).join("")}
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>`;
  }
}

new Calendar(document.getElementById("app"), Events, new Date().getMonth(), new Date().getFullYear());

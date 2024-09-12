import { Events } from "./data.js";
import { startOfWeek } from "./functions/date.js";

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
    const start = startOfWeek(new Date(year, month, 1, 0, 0, 0, 0));
    root.innerHTML = `
    <table>
      <thead>
        <th>

        </th>
      </thead>
      <tbody>

      </tbody>
    </table>`;
  }
}

new Calendar(document.getElementById("app"), Events, new Date().getMonth(), new Date().getFullYear());

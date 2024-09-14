import { readFile } from "node:fs/promises";

const path = "storage/todos.json";

/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

/**
 * @returns {Promise<Todo[]>}
 */
export async function findTodos() {
  const data = await readFile(path, "utf8");
  return JSON.parse(data);
}

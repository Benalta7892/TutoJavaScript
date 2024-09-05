/**
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 */
export function clamp(value, min, max) {
  if (value > max) {
    return max;
  } else if (value < min) {
    return min;
  }
  return value;
}

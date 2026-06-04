/**
 * Format a rating to one decimal place
 * @param {number} rating - The rating to format
 * @returns {string} - Formatted rating (e.g., "5.7", "8.0")
 */
export function formatRating(rating) {
  if (typeof rating !== 'number') {
    return '0.0';
  }
  return rating.toFixed(1);
}

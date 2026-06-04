/**
 * Get the YouTube trailer video key from TMDB videos array
 * Filters for YouTube trailers and returns the first one found
 * @param {Array} videos - Array of video objects from TMDB API
 * @returns {string|null} - YouTube video key or null if not found
 */
export function getTrailerKey(videos) {
  if (!Array.isArray(videos) || videos.length === 0) {
    return null;
  }

  // Look for YouTube trailer
  const trailer = videos.find(
    (video) => video.site === "YouTube" && video.type === "Trailer"
  );

  return trailer ? trailer.key : null;
}

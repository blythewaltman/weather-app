/**
 * Asynchronous function to fetch geolocation data based on a search query.
 * @param {Object} searchQuery - The search query object containing location details.
 * @returns {Promise<Array>} - A promise that resolves to an array of geolocation results.
 * @throws {Error} - Throws an error if there's an issue with the HTTP request or response.
 */
const getGeolocation = async (searchQuery) => {
  try {
    const params = new URLSearchParams();
    for (const key in searchQuery) {
      if (searchQuery[key] && searchQuery[key] !== "") {
        params.append(key, searchQuery[key]);
      }
    }
    if (params.toString() !== "") {
      params.append("limit", 5);
      params.append("format", "json");

      console.log(
        "search query is",
        `https://nominatim.openstreetmap.org/search?${params}`
      );

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?${params}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error("Network response was not ok");
  }
};

export default getGeolocation;

/**
 * Asynchronous function to fetch weather data based on latitude and longitude coordinates.
 * @param {number} lat - The latitude of the location.
 * @param {number} lon - The longitude of the location.
 * @returns {Promise<Object>} - A promise that resolves to the weather forecast data.
 * @throws {Error} - Throws an error if there's an issue with the HTTP request or response.
 */
const getWeatherData = async (lat, lon) => {
  try {
    const locationMetadataResponse = await fetch(
      `https://api.weather.gov/points/${lat},${lon}`,
      {
        headers: {
          "User-Agent": "(bwaltman32@gmail.com)",
        },
      }
    );
    if (!locationMetadataResponse.ok) {
      console.log("server error", locationMetadataResponse.status);
      throw new Error("Network response was not ok");
    }

    const locationMetadata = await locationMetadataResponse.json();
    const forecastUrl = locationMetadata["properties"]["forecast"];
    console.log("forecast url: ", forecastUrl);
    const locationForecastResponse = await fetch(`${forecastUrl}`, {
      headers: {
        "User-Agent": "(bwaltman32@gmail.com)",
      },
    });
    if (!locationMetadataResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const responseText = await locationForecastResponse.text();
    const locationForecast = JSON.parse(responseText); // Try parsing the response text as JSON
    console.log("location forecast: ", locationForecast);
    return locationForecast;
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    throw new Error("Network response was not ok");
  }
};

export default getWeatherData;

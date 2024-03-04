import React from "react";
import { render, screen } from "@testing-library/react";
import CityCard from "../Weather/CityCard";

const mockCity = {
  location: {
    locationId: 315657768,
    lon: "-105.270545",
    lat: "40.0149856",
    name: "Boulder",
  },
  weather: {
    properties: {
      periods: [
        {
          number: 1,
          name: "Overnight",
          startTime: "2024-03-04T01:00:00-07:00",
          endTime: "2024-03-04T06:00:00-07:00",
          isDaytime: false,
          temperature: 26,
          temperatureUnit: "F",
          windSpeed: "6 mph",
          windDirection: "SW",
          icon: "https://api.weather.gov/icons/land/night/snow,20?size=medium",
          shortForecast: "Slight Chance Light Snow",
          detailedForecast:
            "A slight chance of snow before 3am. Mostly cloudy, with a low around 26. Southwest wind around 6 mph. Chance of precipitation is 20%.",
        },
      ],
    },
  },
};

test("renders CityCard component with correct data", () => {
  const handleCityDeletion = jest.fn();

  render(
    <CityCard key={1} city={mockCity} handleCityDeletion={handleCityDeletion} />
  );

  // Check if the component renders the correct city name
  expect(screen.getByText("Boulder")).toBeInTheDocument();

  // Check if the component renders the correct temperature
  expect(screen.getByText("26°F")).toBeInTheDocument();
});

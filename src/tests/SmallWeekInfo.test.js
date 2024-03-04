import React from "react";
import { render, screen } from "@testing-library/react";
import SmallWeekInfo from "../Weather/SmallWeekInfo";

test("renders SmallWeekInfo component with correct data", () => {
  const period = {
    number: 2,
    name: "Monday",
    startTime: "2024-03-04T06:00:00-07:00",
    endTime: "2024-03-04T18:00:00-07:00",
    isDaytime: true,
    temperature: 49,
    temperatureUnit: "F",
    temperatureTrend: "falling",
    probabilityOfPrecipitation: {
      unitCode: "wmoUnit:percent",
      value: null,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: -8.88888888888889,
    },
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 60,
    },
    windSpeed: "5 to 15 mph",
    windDirection: "SSW",
    icon: "https://api.weather.gov/icons/land/day/bkn?size=medium",
    shortForecast: "Partly Sunny",
    detailedForecast:
      "Partly sunny. High near 49, with temperatures falling to around 47 in the afternoon. South southwest wind 5 to 15 mph, with gusts as high as 24 mph.",
  };

  const weatherDay = {
    weather: {
      number: 1,
    },
  };

  const setWeatherDay = jest.fn();

  const { getByText, getByTestId } = render(
    <SmallWeekInfo
      period={period}
      weatherDay={weatherDay}
      setWeatherDay={setWeatherDay}
    />
  );

  // Check if the component renders the correct weekday abbreviation
  expect(screen.getByText("Mon")).toBeInTheDocument();

  // Check if the component renders the correct temperature
  expect(screen.getByText("49°F")).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import LargeDayInfo from "../Weather/LargeDayInfo";

test("renders LargeDayInfo component with correct data", () => {
  const weatherDay = {
    number: 1,
    name: "Overnight",
    temperature: 26,
    temperatureUnit: "F",
    windSpeed: "6 mph",
    relativeHumidity: {
      unitCode: "wmoUnit:percent",
      value: 65,
    },
    dewpoint: {
      unitCode: "wmoUnit:degC",
      value: -8.9,
    },
    icon: "https://api.weather.gov/icons/land/night/snow,20?size=medium",
    shortForecast: "Slight Chance Light Snow",
    detailedForecast:
      "A slight chance of snow before 3am. Mostly cloudy, with a low around 26. Southwest wind around 6 mph. Chance of precipitation is 20%.",
  };

  render(<LargeDayInfo weatherDay={weatherDay} />);

  // Check if the component renders the correct name
  expect(screen.getByText("Overnight")).toBeInTheDocument();

  // Check if the component renders the correct temperature
  expect(screen.getByText("26°F")).toBeInTheDocument();

  // Check if the component renders the correct wind speed
  expect(screen.getByText("6 mph")).toBeInTheDocument();

  // Check if the component renders the correct relative humidity
  expect(screen.getByText("65%")).toBeInTheDocument();

  // Check if the component renders the correct dewpoint
  expect(screen.getByText("-8.9°C")).toBeInTheDocument();

  // Check if the component renders the correct short forecast
  expect(screen.getByText("Slight Chance Light Snow")).toBeInTheDocument();

  // Check if the component renders the correct detailed forecast
  expect(
    screen.getByText(
      "A slight chance of snow before 3am. Mostly cloudy, with a low around 26. Southwest wind around 6 mph. Chance of precipitation is 20%."
    )
  ).toBeInTheDocument();
});

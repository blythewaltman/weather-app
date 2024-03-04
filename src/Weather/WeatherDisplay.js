import { useEffect, useState } from "react";
import getWeatherData from "../utils/getWeatherData";
import SmallWeekInfo from "./SmallWeekInfo";
import LargeDayInfo from "./LargeDayInfo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * WeatherDisplay Component for displaying weather information.
 * @param {Object} props - The component's props.
 * @param {Object} props.geolocation - The geolocation data for the weather display.
 */
const WeatherDisplay = ({ geolocation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDay, setWeatherDay] = useState(null);

  useEffect(() => {
    const callGetWeatherData = async (lat, lon) => {
      try {
        const weatherData = await getWeatherData(lat, lon);
        if (weatherData) {
          setWeatherData(weatherData);
          setWeatherDay({
            location: geolocation,
            weather: weatherData.properties.periods[0],
          });
        } else {
          // Handle the case where weatherData is undefined
          console.error("Error fetching weather data: Data is undefined");
        }
      } catch (error) {
        toast.error("Could not find weather for that location!");
      }
    };

    callGetWeatherData(geolocation.lat, geolocation.lon);
  }, [geolocation]);

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center lg:justify-start lg:pl-[0.5rem] items-center w-[100%] h-[10%] ">
        {weatherDay && weatherDay.location ? (
          <>
            Forecast in&nbsp;
            <span className="font-semibold">{weatherDay.location.name}</span>
          </>
        ) : (
          "Search to get a forecast..."
        )}
      </div>
      <div className="flex justify-evenly flex-wrap md:flex-nowrap d:flew-row gap-[0.5rem] lg:gap-[1rem] w-[100%] h-[30%]">
        {weatherData &&
          weatherData.properties.periods.map(
            (period) =>
              (period.number === 1 || period.isDaytime === true) && (
                <SmallWeekInfo
                  key={period.number}
                  period={period}
                  setWeatherDay={setWeatherDay}
                  weatherDay={weatherDay}
                />
              )
          )}
      </div>
      {weatherDay && weatherDay.weather && (
        <div className="flex flex-col sm:flex-row w-[100%] h-[70%] p-2 gap-2">
          <LargeDayInfo weatherDay={weatherDay.weather} />
        </div>
      )}
    </>
  );
};

export default WeatherDisplay;

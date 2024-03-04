import { FaWind } from "react-icons/fa";
import { WiRaindrop } from "react-icons/wi";
import { MdDewPoint } from "react-icons/md";

/**
 * LargeDayInfo Component for displaying detailed weather information for a specific day.
 * @param {Object} props - The component's props.
 * @param {Object} props.weatherDay - The weather data for the specific day.
 */
const LargeDayInfo = ({ weatherDay }) => {
  return (
    <>
      <div
        className={`flex flex-row gap-1  lg:flex-col items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400  w-[100%] h-[40%] sm:w-[40%] sm:h-[100%] border rounded-xl text-white lg:p-2`}
      >
        <img
          className="scale-[50%] lg:scale-[100%] border rounded-xl"
          src={weatherDay.icon}
          alt=""
        />

        <p className=" text-[1rem]">{weatherDay.name}</p>
        <p className=" text-[1rem] lg:text-[5rem]">
          {weatherDay.temperature}&deg;{weatherDay.temperatureUnit}
        </p>
        <p className="text-[0.6rem] lg:text-[1rem] text-center overflow-auto p-2 pb-2">
          {weatherDay.shortForecast}
        </p>
      </div>
      <div className="flex flex-row sm:flex-col w-[100%] h-[60%] sm:w-[60%] sm:h-[100%] gap-2 ">
        <div className="w-[100%] h-[100%] sm:h-[50%] border rounded-xl bg-gradient-to-r from-[#e17b48] via-[#e38d62] to-[#e17b48] text-white">
          <div className="flex items-center justify-between flex-row gap-2 h-[33.3%] px-4 border-b text-[0.6rem] lg:text-[0.9rem]">
            <p>Wind</p>
            <div className="flex flex-row gap-2 items-center">
              <p>{weatherDay.windSpeed}</p>
              <FaWind className="" />
            </div>
          </div>
          <div className="flex items-center justify-between flex-row gap-2 h-[33.3%] px-4 border-b text-[0.6rem] lg:text-[0.9rem] ">
            <p>Humidity</p>
            <div className="flex flex-row gap-2 items-center">
              <p>
                {weatherDay &&
                  weatherDay.relativeHumidity &&
                  weatherDay.relativeHumidity.value !== undefined && (
                    <>{weatherDay.relativeHumidity.value}%</>
                  )}
              </p>
              <WiRaindrop className="" />
            </div>
          </div>
          <div className="flex items-center justify-between flex-row gap-2  h-[33.3%] px-4 text-[0.6rem] lg:text-[0.9rem]">
            <p>Dewpoint</p>
            <div className="flex flex-row gap-2 items-center">
              <p>{weatherDay.dewpoint.value.toFixed(1)}&deg;C</p>
              <MdDewPoint className="" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-[100%] p-2 h-[100%] sm:h-[50%] border rounded-xl bg-gradient-to-r from-[#d76e9b] via-[#f66ea8] to-[#d76e9b] text-white">
          <div className="flex items-center h-[90%] text-center overflow-auto text-[0.5rem] sm:text-[0.5rem] lg:text-[0.9rem]">
            <p className="">{weatherDay.detailedForecast}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeDayInfo;

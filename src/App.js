import { useState } from "react";
import DefaultWeatherDisplay from "./DefaultDashBoard/DefaultWeatherDisplay";
import DashboardTime from "./DefaultDashBoard/DashboardTime";
import GeolocationSearch from "./Geolocation/GeolocationSearch";
import WeatherDisplay from "./Weather/WeatherDisplay";
import CityDisplay from "./Weather/CityDisplay";

function App() {
  const [geolocation, setGeolocation] = useState(null);
  const [cityInfo, setCityInfo] = useState([]);
  return (
    <body className="bg-blue-200 w-full min-h-screen flex justify-center items-center py-[2rem] 2xl:px-[10rem] font-body">
      <div className="w-full h-auto px-4">
        <div className="flex flex-col w-[100%] h-full lg:gap-2">
          <div className="flex flex-col lg:flex-row  w-[100%] h-[6rem] lg:h-[3rem] ">
            <div className="flex order-last lg:order-first w-[100%] h-[70%] lg:w-[80%] lg:h-[100%]">
              <GeolocationSearch
                setGeolocation={setGeolocation}
                onlySearchCity={false}
              />
            </div>
            <div className="flex items-center order-first lg:order-last w-[100%] h-[70%] lg:w-[20%] lg:h-[100%] lg:justify-end lg:pr-2">
              <DashboardTime />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row h-[45rem] md:h-[39rem] w-[100%] gap-2 lg:gap-[1rem]">
            <div className="flex border border-gray-400 bg-[#F0F5FF] shadow-2xl rounded-xl p-3 pb-10 flex-col lg:flex-col w-[100%] h-[70%] lg:w-[80%] lg:h-[100%] gap-[1.6rem] md:gap-[0.5rem] lg:gap-2">
              {geolocation ? (
                <WeatherDisplay geolocation={geolocation} />
              ) : (
                <DefaultWeatherDisplay />
              )}
            </div>
            <div className="border-gray-400 bg-white shadow-2xl w-[100%] h-[100%] lg:w-[30%] lg:h-[100%] border rounded-xl pt-4 px-2 pb-4">
              <CityDisplay cityInfo={cityInfo} setCityInfo={setCityInfo} />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;

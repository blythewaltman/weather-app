import GeolocationSearch from "../Geolocation/GeolocationSearch";
import { useState, useEffect } from "react";
import getWeatherData from "../utils/getWeatherData";
import CityCard from "./CityCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * CityDisplay Component for managing and displaying user-selected cities with weather information.
 * @param {Object} props - The component's props.
 * @param {Array} props.cityInfo - The array of city information objects containing location and weather details.
 * @param {function} props.setCityInfo - Function to update the city information state.
 */
const CityDisplay = ({ cityInfo, setCityInfo }) => {
  const [geolocation, setGeolocation] = useState(null);

  function handleCityDeletion(cityToDeleteId) {
    const updatedCities = cityInfo.filter(
      (city) => city.location.locationId !== cityToDeleteId
    );
    setCityInfo(updatedCities);
  }

  useEffect(() => {
    const callGetWeatherData = async (lat, lon) => {
      // Check if a city with the same location ID already exists in cityInfo
      const isCityExists = cityInfo.some(
        (city) => city.location.locationId === geolocation.locationId
      );
      if (!isCityExists) {
        try {
          const weatherData = await getWeatherData(lat, lon);
          setCityInfo((prevCityInfo) => [
            ...prevCityInfo,
            { location: geolocation, weather: weatherData },
          ]);
          setGeolocation(null);
        } catch (error) {
          toast.error("Could not find weather for that location!");
        }
      } else {
        toast.error("You already have that city!");
      }
    };

    if (geolocation) {
      callGetWeatherData(geolocation.lat, geolocation.lon);
    }
  }, [geolocation, setCityInfo, cityInfo]);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row justify-between h-[40%] lg:h-[10%] border-b-[0.1rem] pb-8 lg:pb-4 gap-2 ">
        <div className=" flex items-center font-semibold pl-2 ">My Cities</div>

        <GeolocationSearch
          setGeolocation={setGeolocation}
          onlySearchCity={true}
        />
      </div>
      <div className="h-[60%] lg:h-[90%] overflow-y-auto">
        {cityInfo.length > 0 && (
          <div className="flex flex-col justify-between">
            {cityInfo.map((city) => (
              <CityCard
                key={city.location.locationId}
                city={city}
                handleCityDeletion={() =>
                  handleCityDeletion(city.location.locationId)
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CityDisplay;

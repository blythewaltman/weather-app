import { useState, useEffect } from "react";
import getGeolocation from "../utils/getGeolocation";
import SearchBar from "./SearchBar";
import MultipleLocationModal from "./MultipleLocationModal";
import NoLocationModal from "./NoLocationModal";
import { ToastContainer, toast } from "react-toastify";

/**
 * GeolocationSearch Component for searching and selecting locations.
 * @param {Object} props - The component's props.
 * @param {function} props.setGeolocation - Function to set the selected geolocation.
 * @param {boolean} props.onlySearchCity - Flag to indicate whether to search only for cities.
 */
const GeolocationSearch = ({ setGeolocation, onlySearchCity }) => {
  const [location, setLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const callGetGeolocation = async () => {
      try {
        // Async function to fetch geolocation data
        let geolocation = await getGeolocation(searchQuery);
        if (geolocation) {
          // For the CityDisplay Component we only want locations that have an address type of city
          if (onlySearchCity) {
            geolocation = geolocation.filter(
              (location) => location.addresstype === "city"
            );
          }
          // Only one location was returned from the api call set the geolocation equal to it
          if (geolocation.length === 1) {
            setGeolocation({
              locationId: geolocation[0].place_id,
              lon: geolocation[0].lon,
              lat: geolocation[0].lat,
              name: geolocation[0].name,
            });
          } else {
            setLocation(geolocation);
          }
        }
      } catch (error) {
        toast.error("Error finding that location");
      }
    };

    if (searchQuery !== "") {
      callGetGeolocation();
    }
  }, [searchQuery, setGeolocation, onlySearchCity]);

  // Function to handle the selection of a location from the modal if multiple locations were found
  function handleLocationPick(result) {
    console.log("picked location: ", result);
    setSearchQuery("");
    setGeolocation({
      locationId: result.place_id,
      lat: result.lat,
      lon: result.lon,
      name: result.name,
    });
    setLocation(null);
  }
  // Render component structure with search bar and modals
  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-center w-[100%] h-[100%] lg:h-[100%] lg:w-[75%] gap-2">
        <SearchBar
          setSearchQuery={setSearchQuery}
          onlySearchCity={onlySearchCity}
        />
      </div>
      <MultipleLocationModal
        location={location}
        handleLocationPick={handleLocationPick}
        setLocation={setLocation}
        setSearchQuery={setSearchQuery}
        onlySearchCity={onlySearchCity}
      />
      <NoLocationModal
        location={location}
        setLocation={setLocation}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
};

export default GeolocationSearch;

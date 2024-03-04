/**
 * CityCard Component for displaying individual city cards with weather information.
 * @param {Object} props - The component's props.
 * @param {string} props.key - The unique key for the city card.
 * @param {Object} props.city - The city data object containing location and weather information.
 * @param {function} props.handleCityDeletion - Function to handle the deletion of a city.
 */
const CityCard = ({ key, city, handleCityDeletion }) => {
  return (
    <div
      onClick={() => handleCityDeletion(key)}
      className="flex items-center px-4 lg:text-[2rem] h-[4rem] lg:h-[6rem] flex-row justify-between w-full border-b-[0.1rem] border-gray-200 border-1 hover:bg-red-300 hover:cursor-pointer"
    >
      <p>{city.location.name}</p>
      <p>
        {city.weather.properties.periods[0].temperature}&deg;
        {city.weather.properties.periods[0].temperatureUnit}
      </p>
    </div>
  );
};

export default CityCard;

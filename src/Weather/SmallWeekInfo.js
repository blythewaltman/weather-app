/**
 * SmallWeekInfo Component for displaying weather information for a specific day in a week.
 * @param {Object} props - The component's props.
 * @param {Object} props.period - The weather data for the specific day in the week.
 * @param {function} props.setWeatherDay - Function to set the selected day's weather information.
 * @param {Object} props.weatherDay - The currently selected day's weather information.
 */
const SmallWeekInfo = ({ period, setWeatherDay, weatherDay }) => {
  function handleDaySelection() {
    setWeatherDay({ ...weatherDay, weather: period });
  }

  function convertToAbbreviatedWeekday(input) {
    // Check if the input is a valid weekday name
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (weekdays.includes(input)) {
      // Return the abbreviated form directly
      return input.slice(0, 3); // Assuming the weekday name is at least 3 characters
    } else {
      // Return the input unchanged if it's not a valid weekday name
      return input;
    }
  }

  return (
    <div
      onClick={handleDaySelection}
      className={`flex flex-col justify-center gap-2 items-center border w-[20%] p-2 rounded-xl shadow-sm hover:cursor-pointer ${
        weatherDay.weather.number === period.number
          ? "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-blue-400 to-blue-500"
          : "bg-white"
      }`}
    >
      <p
        className={`text-[0.7rem] sm:text-[0.9rem] md:text-[1rem] lg:text-[1.5rem] ${
          weatherDay.weather.number === period.number
            ? "text-blue-100"
            : "text-gray-700"
        }`}
      >
        {convertToAbbreviatedWeekday(period.name)}
      </p>
      <p
        className={`font-black text-[0.7rem] md:text-[1.5rem] lg:text-[1.5rem] ${
          weatherDay.weather.number === period.number
            ? "text-blue-100"
            : "text-gray-400"
        }`}
      >
        {period.temperature}&deg;{period.temperatureUnit}
      </p>
    </div>
  );
};

export default SmallWeekInfo;

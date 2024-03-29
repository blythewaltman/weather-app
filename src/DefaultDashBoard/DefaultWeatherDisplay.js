const DefaultWeatherDisplay = () => {
  return (
    <div className="flex flex-col items-center lg:justify-center w-[100%] h-[100%] p-2 gap-8 md:gap-10 lg:gap-[3rem]">
      <div className="flex items-center justify-center bg-gradient-to-l from-blue-400 via-teal-400 to-blue-400 text-[1.5rem] lg:text-[2rem] xl:text-[2.8rem] lg:h-[20%] lg:w-[60%] font-semibold p-2 border rounded-lg">
        Weather Dashboard
      </div>
      <div className="flex flex-col justify-center text-[1rem] lg:text-[2rem] lg:h-[30%] lg:w-[50%] lg:gap-2">
        {/* <div className="w-[100%] bg-blue-200 text-center">Welcome!</div> */}
        <div className="text-[.9rem] lg:text-[1rem]">
          ○ To get started look up a location in the search bar above
        </div>
        <div className="text-[.9rem]  lg:text-[1rem]">
          ○ You can use a free form search in the search bar
        </div>
        <div className="text-[.9rem]  lg:text-[1rem]">
          ○ Click the button to the left of the search bar for optional fields
        </div>
        <div className="text-[.9rem]  lg:text-[1rem]">
          ○ Add cities to the right to get an overview of multiple forecasts
        </div>
      </div>
    </div>
  );
};

export default DefaultWeatherDisplay;

/**
 * CityQuery Component for handling free-form city queries.
 * @param {Object} props - The component's props.
 * @param {function} props.setQuery - Function to set the city query.
 * @param {Object} props.query - Object representing the current city query.
 * @param {string} props.query.city - The city value in the query.
 */
const CityQuery = ({ setQuery, query }) => {
  function handleFreeFormQueryChange(e) {
    e.stopPropagation();
    setQuery({
      city: e.target.value,
    });
  }
  return (
    <input
      className="pl-[0.5rem] w-[95%] h-[100%] border rounded  shadow-2xl border-blue-400 text-blue-500 placeholder:text-blue-400"
      onChange={(e) => handleFreeFormQueryChange(e)}
      placeholder="Add City..."
      value={query.city ? query.city : ""}
    />
  );
};

export default CityQuery;

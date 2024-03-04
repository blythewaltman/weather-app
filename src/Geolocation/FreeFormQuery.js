/**
 * FreeFormQuery Component for handling free-form location queries.
 * @param {Object} props - The component's props.
 * @param {function} props.setQuery - Function to set the location query.
 * @param {Object} props.query - Object representing the current location query.
 * @param {string} props.query.q - The query value for location search.
 */
const FreeFormQuery = ({ setQuery, query }) => {
  function handleFreeFormQueryChange(e) {
    e.stopPropagation();
    if (e.target.value !== "") {
      setQuery({
        q: e.target.value,
      });
    }
  }
  return (
    <input
      className="pl-[0.5rem] w-[95%] h-[100%] border border-x-transparent rounded-none shadow-2xl border-blue-400 text-blue-500  placeholder:text-blue-400"
      onChange={(e) => handleFreeFormQueryChange(e)}
      placeholder="Search Location..."
      value={query.q ? query.q : ""}
    />
  );
};

export default FreeFormQuery;

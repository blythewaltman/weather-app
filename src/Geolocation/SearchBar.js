import { useState } from "react";
import StructuredQuery from "./StructuredQuery";
import FreeFormQuery from "./FreeFormQuery";
import CityQuery from "./CityQuery";
import { FaSearch } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { MdFormatAlignLeft } from "react-icons/md";

/**
 * SearchBar Component for handling location searches with different query types.
 * @param {Object} props - The component's props.
 * @param {function} props.setSearchQuery - Function to set the search query state.
 * @param {boolean} props.onlySearchCity - Flag to indicate whether to search only for cities.
 */
const SearchBar = ({ setSearchQuery, onlySearchCity }) => {
  const [query, setQuery] = useState("");
  const [showStructuredQueryModal, setShowStructuredQueryModal] =
    useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (query && query !== "") {
      console.log("query is ", query);
      setSearchQuery(query);
      setQuery("");
    }
  }

  return (
    <>
      <div className="w-[100%] lg:w-[100%] h-[75%]">
        <form
          onSubmit={onSubmit}
          className="relative flex items-center w-[100%] h-[100%]"
        >
          {onlySearchCity ? (
            <>
              <CityQuery query={query} setQuery={setQuery} />
              <button
                className="flex items-center justify-center h-[100%] w-[10%] md:w-[15%]"
                type="submit"
              >
                <CiSquarePlus className="w-[100%] h-[100%] fill-gray-500 hover:fill-green-400" />
              </button>
            </>
          ) : (
            <>
              {" "}
              <button
                className="flex items-center bg-white justify-center border border-blue-400 rounded-l-xl h-[100%] w-[10%] md:w-[5%]"
                type="button"
                onClick={() => setShowStructuredQueryModal(true)}
              >
                <MdFormatAlignLeft className="fill-blue-400" />
              </button>
              {onlySearchCity ? (
                <StructuredQuery
                  setQuery={setQuery}
                  onlySearchCity={onlySearchCity}
                />
              ) : null}
              <FreeFormQuery query={query} setQuery={setQuery} />
              {showStructuredQueryModal && (
                <StructuredQuery
                  setQuery={setQuery}
                  onSubmit={onSubmit}
                  setShowStructuredQueryModal={setShowStructuredQueryModal}
                />
              )}
              <button
                className="flex items-center bg-white justify-center border border-blue-400 rounded-r-xl h-[100%] w-[10%] md:w-[5%]"
                type="submit"
              >
                <FaSearch className="fill-blue-400" />
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;

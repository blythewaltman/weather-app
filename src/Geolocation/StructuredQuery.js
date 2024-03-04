import { useState } from "react";
import { Modal } from "flowbite-react";

/**
 * StructuredQuery Component for handling structured location queries.
 * @param {Object} props - The component's props.
 * @param {function} props.setQuery - Function to set the structured query state.
 * @param {function} props.onSubmit - Function to handle form submission.
 * @param {function} props.setShowStructuredQueryModal - Function to control modal visibility.
 */
const StructuredQuery = ({
  setQuery,
  onSubmit,
  setShowStructuredQueryModal,
}) => {
  const [structuredQuery, setStructuredQuery] = useState({
    amenity: "",
    street: "",
    city: "",
    county: "",
    state: "",
    country: "",
    postalcode: "",
  });
  function handleStructuredQueryChange(e, field) {
    e.stopPropagation();
    setStructuredQuery((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
    setQuery((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  }

  const inputFields = Object.keys(structuredQuery).map((field) => (
    <input
      className="pl-[0.5rem] border-b border-blue-400 text-[0.6rem] md:text-sm lg:text-base placeholder:text-blue-400"
      key={field}
      onChange={(e) => handleStructuredQueryChange(e, field)}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      value={structuredQuery[field]}
    />
  ));

  const handleModalSearch = (e) => {
    const filteredQuery = Object.fromEntries(
      Object.entries(structuredQuery).filter(([key, value]) => value !== "")
    );
    setQuery(filteredQuery);
    onSubmit(e);
    setShowStructuredQueryModal(false);
  };

  return (
    <>
      <Modal
        show={true}
        onClose={() => {
          setShowStructuredQueryModal(false) && setQuery("");
        }}
      >
        <Modal.Header>Search Using These Optional Fields</Modal.Header>
        <Modal.Body>
          <div className="grid border-blue-400 border-t border-l border-r">
            {inputFields}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <button
            className="bg-blue-200 p-2 rounded"
            onClick={(e) => {
              handleModalSearch(e);
            }}
          >
            Search
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StructuredQuery;

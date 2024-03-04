import { Modal } from "flowbite-react";

/**
 * MultipleLocationModal Component for displaying multiple location options.
 * @param {Object} props - The component's props.
 * @param {Array} props.location - Array of locations to display in the modal.
 * @param {function} props.handleLocationPick - Function to handle the selection of a location.
 * @param {function} props.setLocation - Function to set the location state.
 * @param {function} props.setSearchQuery - Function to set the search query state.
 * @param {boolean} props.onlySearchCity - Flag to indicate whether to search only for cities.
 */
const MultipleLocationModal = ({
  location,
  handleLocationPick,
  setLocation,
  setSearchQuery,
  onlySearchCity,
}) => {
  return (
    <Modal
      show={location && location.length > 1}
      onClose={() => {
        setLocation(null);
        setSearchQuery("");
      }}
    >
      <Modal.Header>Multiple Locations Match Your Search</Modal.Header>
      <Modal.Body>
        {location &&
          location.map((location) => (
            <li
              className="hover:text-blue-500 hover:cursor-pointer"
              onClick={() => handleLocationPick(location)}
              key={location.place_id}
            >
              {location.display_name} ({location.addresstype})
            </li>
          ))}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default MultipleLocationModal;

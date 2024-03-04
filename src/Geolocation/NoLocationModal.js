import { Modal } from "flowbite-react";

/**
 * NoLocationModal Component for displaying a message when no locations match the search.
 * @param {Object} props - The component's props.
 * @param {Array} props.location - Array of locations to check if empty.
 * @param {function} props.setLocation - Function to set the location state.
 * @param {function} props.setSearchQuery - Function to set the search query state.
 */
const NoLocationModal = ({ location, setLocation, setSearchQuery }) => {
  return (
    <Modal
      show={location && location.length === 0}
      onClose={() => {
        setLocation(null);
        setSearchQuery("");
      }}
    >
      <Modal.Header>No Locations Match Your Search</Modal.Header>
      <Modal.Body>
        <div className="flex flex-col gap-2">
          <p>Try a different search!</p>
          <p className="text-green-600">
            - Hint: try separating your search with commas
          </p>
          <p className="text-green-600">
            - Hint: try using the structured query search
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default NoLocationModal;

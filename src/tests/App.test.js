import { render } from "@testing-library/react";
import App from "../App";

test("renders App component without crashing", () => {
  render(<App />);
  // Check if the component renders without errors
});

import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Header component", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByPlaceholderText("Search or Jump to...")).toBeInTheDocument();
  });
  it("navigates to the search page on form submit", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText("Search or Jump to...");
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.submit(screen.getByRole("textbox"));
    expect(mockNavigate).toHaveBeenCalledWith("/test");
  });
  
});

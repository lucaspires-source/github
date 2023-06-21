import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("renders Line and GithubLogo components", () => {
    render(<Footer />);

    // Check if Line component is rendered
    const line = screen.getByTestId("line");
    expect(line).toBeInTheDocument();

    // Check if GithubLogo component is rendered
    const githubLogo = screen.getByTestId("github-logo");
    expect(githubLogo).toBeInTheDocument();
  });
  it("renders Footer without crashing", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  
});

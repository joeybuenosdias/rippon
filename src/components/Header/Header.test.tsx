import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  test("renders header text", () => {
    render(<Header />);
    expect(screen.getByText("Header")).toBeInTheDocument();
  });
});

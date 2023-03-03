import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavBar from "@/app/components/NavBar";

describe("NavBar", () => {
  it("renders the nav bar text", () => {
    render(<NavBar />);

    expect(screen.getByText("Gotta catch 'em all!")).toBeInTheDocument();
  });
});

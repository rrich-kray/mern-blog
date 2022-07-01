import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../Hero";

// prevent memory leaks
afterEach(cleanup);

describe("Component renders", () => {
  test("renders", () => {
    render(<Hero />);
  });

  test("Matches the DOM node structure", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});

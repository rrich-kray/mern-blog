import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Articles from "../Articles";

// prevent memory leaks
afterEach(cleanup);

describe("Component renders", () => {
  test("renders", () => {
    render(<Articles />);
  });

  test("Matches the DOM node structure", () => {
    const { asFragment } = render(<Articles />);
    expect(asFragment()).toMatchSnapshot();
  });
});

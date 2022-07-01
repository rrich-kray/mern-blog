import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../Nav";

// prevent memory leaks
afterEach(cleanup);

describe("Component renders", () => {
  test("renders", () => {
    render(<Nav />);
  });

  test("Matches the DOM node structure", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

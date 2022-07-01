import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "../Post";

// prevent memory leaks
afterEach(cleanup);

describe("Component renders", () => {
  test("renders", () => {
    render(<Post />);
  });

  test("Matches the DOM node structure", () => {
    const { asFragment } = render(<Post />);
    expect(asFragment()).toMatchSnapshot();
  });
});

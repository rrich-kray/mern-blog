import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Login from "../Login";

// prevent memory leaks
afterEach(cleanup);

describe("Component renders", () => {
  test("renders", () => {
    render(<Login />);
  });

  test("Matches the DOM node structure", () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
});

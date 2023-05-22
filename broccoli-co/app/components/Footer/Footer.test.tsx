import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

it("renders the Footer component correctly", () => {
  const { getByText } = render(<Footer />);

  // Assert that the footer text is rendered correctly
  const footerTextElement = getByText(/Made with/i);
  expect(footerTextElement).toBeInTheDocument();

  // Assert that the small copyright text is rendered correctly
  const copyrightTextElement = getByText(/© 2023 Broccoli & Co/i);
  expect(copyrightTextElement).toBeInTheDocument();
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Title from "./Title";

it("renders the title correctly", () => {
  // Arrange
  const titleText = "Hello, World!";

  // Act
  const { getByText } = render(<Title>{titleText}</Title>);

  // Assert
  const titleElement = getByText(titleText);
  expect(titleElement).toBeInTheDocument();
});

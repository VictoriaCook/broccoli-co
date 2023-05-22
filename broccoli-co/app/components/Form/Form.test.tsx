import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

it("renders the form component correctly", () => {
  const onSubmit = jest.fn();
  const formHeading = "Test Form";
  const { getByText } = render(
    <Form onSubmit={onSubmit} formHeading={formHeading}>
      <div>Test child component</div>
    </Form>
  );

  const headingElement = getByText(formHeading);
  const childComponent = getByText("Test child component");

  expect(headingElement).toBeInTheDocument();
  expect(childComponent).toBeInTheDocument();
});

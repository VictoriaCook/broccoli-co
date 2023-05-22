import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("renders the label and input correctly", () => {
    // Arrange
    const label = "Name";
    const name = "name";
    const value = "Jane Chen";
    const placeholder = "Full name";
    const onChange = jest.fn();

    // Act
    const { getByLabelText } = render(
      <TextInput
        label={label}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );

    // Assert
    const labelElement = getByLabelText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("calls the onChange function when input value changes", () => {
    // Arrange
    const label = "Name";
    const name = "name";
    const value = "Jane Smith";
    const onChange = jest.fn();

    // Act
    const { getByLabelText } = render(
      <TextInput label={label} name={name} value={value} onChange={onChange} />
    );

    const inputElement = getByLabelText(label);

    // Simulate change event
    fireEvent.change(inputElement, { target: { value: "Jane Simpson" } });

    // Assert
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
    expect(onChange.mock.calls[0][0].target.value).toBe("Jane Smith");
  });
});

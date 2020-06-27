import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import Button from "./Button";

describe("Button", () => {
  it("should render Button", () => {
    const mockFn = jest.fn();
    const { getAllByText } = render(
      <Button title="Press me!" onPress={mockFn} />
    );

    expect(getAllByText("Press me!")).toHaveLength(1);
  });

  it("should fire onPress event when pressed", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Button title="Press me!" onPress={mockFn} />);

    fireEvent(getByText("Press me!"), "press");

    expect(mockFn).toHaveBeenCalled();
  });
});

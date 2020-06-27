import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import Button from "./Button";
import colors from "../../config/colors";

describe("Button", () => {
  const mockFn = jest.fn();

  it("should accept color prop on Button", () => {
    const { getByTestId } = render(
      <Button title="Press me!" onPress={mockFn} color="secondary" />
    );

    expect(getByTestId("btn-touchable")).toHaveStyle({
      backgroundColor: colors.secondary,
    });
  });

  it("should render correct button text", () => {
    const { getAllByText } = render(
      <Button title="Press me!" onPress={mockFn} />
    );

    expect(getAllByText("Press me!")).toHaveLength(1);
  });

  it("should fire onPress event when pressed", () => {
    const { getByText } = render(<Button title="Press me!" onPress={mockFn} />);

    fireEvent(getByText("Press me!"), "press");

    expect(mockFn).toHaveBeenCalled();
  });
});

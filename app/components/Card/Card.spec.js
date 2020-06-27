import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import Card from "./Card";

describe("Card", () => {
  it("should render Card with title text", () => {
    const mockFn = jest.fn();
    const { getAllByText } = render(
      <Card title="Press me!" onPress={mockFn} />
    );

    expect(getAllByText("Press me!")).toHaveLength(1);
  });

  it("should render card with Image", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <Card title="Press me!" onPress={mockFn} imageUrl={"example-uri"} />
    );

    const imageElement = getByTestId("card-image");
    expect(imageElement.type).toBe("Image");
  });

  it("should fire onPress event when pressed", () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Card title="Press me!" onPress={mockFn} />);

    fireEvent(getByText("Press me!"), "press");

    expect(mockFn).toHaveBeenCalled();
  });
});

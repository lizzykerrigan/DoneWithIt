import React from "react";
import { render, waitFor } from "react-native-testing-library";

import ScreenComponent from "./ScreenComponent";
import { Text } from "react-native";

describe("ScreenComponent", () => {
  it("should successfully render its children", () => {
    const { getByTestId } = render(
      <ScreenComponent>
        <Text testID="example-text">Hello, world!</Text>
      </ScreenComponent>
    );

    expect(getByTestId("example-text")).toHaveTextContent("Hello, world!");
  });

  it("should accept a custom style prop", () => {
    const { getByTestId } = render(
      <ScreenComponent style={{ backgroundColor: "#2020" }} />
    );

    expect(getByTestId("safe-area-view")).toHaveStyle({
      backgroundColor: "#2020",
    });
  });
});

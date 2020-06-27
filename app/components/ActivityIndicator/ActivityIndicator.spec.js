import React from "react";
import { render } from "react-native-testing-library";

import ActivityIndicator from "./ActivityIndicator";

describe("ActivityIndicator", () => {
  it("should render LottieView if visible prop exists", () => {
    const { queryByTestId } = render(<ActivityIndicator visible />);

    const lottie = queryByTestId("lottie-view");
    expect(lottie).toBeTruthy();
  });

  it("shouldn't render LottieView if visible prop does not exist", () => {
    const { queryByTestId } = render(<ActivityIndicator />);

    const lottie = queryByTestId("lottie-view");
    expect(lottie).toBeNull();
  });
});

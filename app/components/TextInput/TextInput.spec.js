import React from "react";
import { render, waitFor } from "react-native-testing-library";

import TextInput from "./TextInput";

describe("TextInput", () => {
  it("should render icon if one is passed through", async () => {
    const { getByTestId } = render(<TextInput icon="email" />);

    const icon = await waitFor(() => getByTestId("icon"));
    expect(icon).toBeTruthy();
  });

  it("should not render icon if not passed through", async () => {
    const { queryByTestId } = render(<TextInput />);

    const icon = await waitFor(() => queryByTestId("icon"));
    expect(icon).toBeNull();
  });
});

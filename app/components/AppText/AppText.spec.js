import React from "react";
import { render } from "react-native-testing-library";

import AppText from "./AppText";

describe("AppText", () => {
  it("should render its children as a Text node", () => {
    const exampleText = "Example text";
    const element = render(<AppText>{exampleText}</AppText>);

    expect(element.getAllByText(exampleText)).toHaveLength(1);
  });
});

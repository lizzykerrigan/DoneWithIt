import React from "react";
import { render, fireEvent } from "react-native-testing-library";

import CategoryPickerItem from "./CategoryPickerItem";

jest.mock("../Icon", () => () => "Icon");

describe("CategoryPickerItem", () => {
  const item = {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  };

  it("should fire onPress event when pressed", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <CategoryPickerItem onPress={mockFn} item={item} />
    );
    fireEvent(getByTestId("category-item"), "press");

    expect(mockFn).toHaveBeenCalled();
  });

  it("should render CategoryPickerItem with correct label from item prop", () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <CategoryPickerItem onPress={mockFn} item={item} />
    );

    expect(getByTestId("app-text")).toHaveTextContent(item.label);
  });
});

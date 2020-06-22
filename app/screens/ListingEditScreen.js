import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import ScreenComponent from "../components/ScreenComponent";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  { backgroundColor: "#fd9644", icon: "car", label: "Cars", value: 2 },
  { backgroundColor: "#fed330", icon: "camera", label: "Cameras", value: 3 },
  { backgroundColor: "#26de81", icon: "cards", label: "Games", value: 4 },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
];

const ListingEditScreen = () => {
  const location = useLocation();

  return (
    <ScreenComponent style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="Post your item!" />
      </Form>
    </ScreenComponent>
  );
};

export default ListingEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

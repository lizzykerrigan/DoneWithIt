import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "../../TextInput";
import ErrorMessage from "../ErrorMessage";

const AppFormField = ({ name, width, ...formFieldProps }) => {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        width={width}
        {...formFieldProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

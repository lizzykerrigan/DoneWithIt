import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "../../TextInput";
import ErrorMessage from "../ErrorMessage";

const AppFormField = ({ name, width, ...formFieldProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <TextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...formFieldProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import ScreenComponent from "./app/components/ScreenComponent";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((element) => element !== uri));
  };

  return (
    <ScreenComponent>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </ScreenComponent>
  );
}

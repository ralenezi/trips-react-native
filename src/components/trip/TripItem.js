//react-native
import { Image } from "react-native";
import { ListItem, View } from "native-base";

//react
import React from "react";

//styles
import { Title, TripImage } from "./styles";

//observer
import { observer } from "mobx-react";

const TripItem = ({ trip }) => {
  return (
    <View>
      <TripImage source={{ uri: trip.image }} />
      <Title>{trip.title}</Title>
    </View>
  );
};

export default observer(TripItem);

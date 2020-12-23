import { ListItem, View } from "native-base";
//styles
import { Title, TripImage } from "./styles";

//react-native
import { Image } from "react-native";
//react
import React from "react";
//observer
import { observer } from "mobx-react";

// REVIEW: cleanup imports

const TripItem = ({ trip }) => {
  return (
    <View>
      <TripImage source={{ uri: trip.image }} />
      <Title>{trip.title}</Title>
    </View>
  );
};

export default observer(TripItem);

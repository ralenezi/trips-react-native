//react-native
import { ListItem } from "native-base";

//react
import React from "react";

//styles
import { Title, TripImage } from "./styles";

//observer
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
      <TripImage source={{ uri: trip.image }} />
      <Title>{trip.title}</Title>
    </ListItem>
  );
};

export default observer(TripItem);

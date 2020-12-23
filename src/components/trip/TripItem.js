//react-native
import { View } from "native-base";

//react
import React from "react";

//styles
import { Title, TripImage } from "./styles";

//observer
import { observer } from "mobx-react";

const TripItem = ({ trip, navigation }) => {
  return (
    <View>
      <TripImage source={{ uri: trip.image }} />
      <Title onPress={() => navigation.navigate("TripDetail", { trip: trip })}>
        {trip.title}
      </Title>
    </View>
  );
};

export default observer(TripItem);

import React from "react";

import Background from "../components/Background";

import { Text } from "react-native";

//trip component
import TripList from "../components/trip/TripList";

const TripListScreen = ({ navigation }) => {
  return (
    <Background>
      <TripList navigation={navigation} />
    </Background>
  );
};

export default TripListScreen;

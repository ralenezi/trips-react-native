import React from "react";

//components

import Button from "../../components/Button";

//trip component
import TripList from "../../components/trip/TripList";
import Background from "../../components/Background";

const TripListScreen = ({ navigation }) => {
  return (
    <Background>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("AddTripScreen")}
      >
        add new trip
      </Button>
      <TripList navigation={navigation} />
    </Background>
  );
};

export default TripListScreen;

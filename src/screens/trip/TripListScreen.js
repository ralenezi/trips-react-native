import React from "react";

//native base
import { Spinner } from "native-base";

//trip component
import TripList from "../../components/trip/TripList";
import Background from "../../components/Background";
import Button from "../../components/Button";

//store
import authStore from "../../stores/authStore";

const TripListScreen = ({ navigation }) => {
  return (
    <Background>
      <TripList navigation={navigation} />

      <Button
        mode="contained"
        onPress={() => navigation.navigate("AddTripScreen")}
      >
        add new trip
      </Button>
    </Background>
  );
};

export default TripListScreen;

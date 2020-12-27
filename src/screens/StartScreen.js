import React from "react";
import BackgroundHome from "../components/BackgroundHome";

import ButtonHome from "../components/ButtonHome";

const StartScreen = ({ navigation }) => (
  <BackgroundHome>
    <ButtonHome
      mode="contained"
      onPress={() => navigation.navigate("LoginScreen")}
    >
      Sign in
    </ButtonHome>
    <ButtonHome
      mode="outlined"
      onPress={() => navigation.navigate("TripListScreen")}
    >
      Continue
    </ButtonHome>
  </BackgroundHome>
);

export default StartScreen;

//native base
import { List, Spinner } from "native-base";

import React from "react";
import { ScrollView } from "react-native-gesture-handler";
//Components
import TripItem from "./TripItem";
// mobx
import { observer } from "mobx-react";
//stores
import tripStore from "../../stores/tripStore";


const TripList = ({ navigation }) => {
  if (tripStore.loading || tripStore.trips.length === 0) return <Spinner />;


  const tripsList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <ScrollView>
      <List>{tripsList}</List>
    </ScrollView>
  );
};

export default observer(TripList);

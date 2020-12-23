import React from "react";

//native base
import { List, Spinner } from "native-base";

//Components
import TripItem from "./TripItem";

// mobx
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";
import { ScrollView } from "react-native-gesture-handler";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;

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

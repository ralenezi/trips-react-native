import React from "react";

//native base
import { Spinner } from "native-base";

//Components
import TripItem from "./TripItem";

// mobx
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";
import { ScrollView } from "react-native-gesture-handler";

//styles
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailWrapper,
  TripDetailDescription,
} from "./styles";

const TripDetails = ({ route }) => {
  if (tripStore.loading) return <Spinner />;

  const { trip } = route.params;
  //   const tripsList = tripStore.trips.map((trip) => (
  //     <TripItem trip={trip} key={trip.id} />
  //   ));

  return (
    <TripDetailWrapper>
      <TripDetailTitle>{trip.title}</TripDetailTitle>
      <TripDetailImage source={{ uri: trip.image }} />
      <TripDetailDescription>{trip.description}</TripDetailDescription>
    </TripDetailWrapper>
  );
};

export default observer(TripDetails);

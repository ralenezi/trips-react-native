import React from "react";

//native base
import { Spinner } from "native-base";

// mobx
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//button
import BackButton from "../BackButton";

//styles
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailWrapper,
  TripDetailDescription,
} from "./styles";

const TripDetails = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const { trip } = route.params;

  return (
    <TripDetailWrapper>
      <TripDetailTitle>{trip.title}</TripDetailTitle>
      <TripDetailImage source={{ uri: trip.image }} />
      <TripDetailDescription>{trip.description}</TripDetailDescription>
    </TripDetailWrapper>
  );
};

export default observer(TripDetails);

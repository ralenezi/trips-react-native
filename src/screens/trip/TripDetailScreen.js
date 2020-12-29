import React from "react";

//native base
import { Spinner } from "native-base";

// mobx
import { observer } from "mobx-react";

//stores
import tripStore from "../../stores/tripStore";

//components
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

//styles
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailDescription,
} from "./styles";

const TripDetailScreen = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const { trip } = route.params;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <TripDetailImage source={{ uri: trip.image }} />
      <TripDetailTitle>{trip.title}</TripDetailTitle>
      <TripDetailDescription>{trip.description}</TripDetailDescription>
    </Background>
  );
};

export default observer(TripDetailScreen);

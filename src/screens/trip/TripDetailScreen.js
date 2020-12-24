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
  TripDetailWrapper,
  TripDetailDescription,
} from "./styles";

const TripDetailScreen = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const { trip } = route.params;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <TripDetailTitle>{trip.title}</TripDetailTitle>
      <TripDetailImage source={{ uri: trip.image }} />
      <TripDetailDescription>{trip.description}</TripDetailDescription>
      {/* </TripDetailWrapper> */}
    </Background>
  );
};

export default observer(TripDetailScreen);

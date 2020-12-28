import React from "react";

//native base
import { Spinner } from "native-base";

// mobx
import { observer } from "mobx-react";

//stores
import profileStore from "../../stores/profileStore";

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

const ProfileScreen = ({ route, navigation }) => {
  if (profileStore.loading) return <Spinner />;

  const { profile } = route.params;
  const numberOfTrips = 1;

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <ProfileImage source={{ uri: profile.image }} />
      <ProfileBio>{profile.bio}</ProfileBio>
      //tripStore aby a3d cham trip 3ndaha naf el uaser id
      <ProfileTrips>{numberOfTrips}</ProfileTrips>
    </Background>
  );
};

export default observer(ProfileScreen);

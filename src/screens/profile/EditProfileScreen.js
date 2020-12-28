import React from "react";

//native base
import { Spinner } from "native-base";
import { Title } from "react-native-paper";

// mobx
import { observer } from "mobx-react";

//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

//components
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from "./styles";

const ProfileScreen = ({ route, navigation }) => {
  // const {profile } = route.params;
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Edit your profile</Title>
    </Background>
  );
};

export default observer(ProfileScreen);

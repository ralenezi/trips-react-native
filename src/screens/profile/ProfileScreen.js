import React from "react";
import { Title } from "react-native-paper";
import { observer } from "mobx-react";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
//components
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from "./styles";
import { Spinner } from "native-base";

const ProfileScreen = ({ route, navigation }) => {
  // const { userId } = route.params
  if (!profileStore.profile) {
    return <Spinner />;
  }
  const profile = profileStore.profile;

  //number of trips >> Comment out la2ana promise uncomment if you solve the issue
  //   const totalTrips = tripStore.trips.filter(
  //     (trip) => trip.userId === userId
  //   );
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Profile</Title>
      {authStore.user?.profileId === profile.id && (
        <Title
          onPress={
            (() => navigation.navigate("EditProfileScreen"),
            { profile: profile })
          }
        >
          edit
        </Title>
      )}

      <ProfileImage
        source={{ uri: profile.image }}
        style={{ borderRadius: "100%" }}
      />
      <ProfileBio>{profile.bio}</ProfileBio>

      {/* please uncomment this vvvv if you solve the promise issue */}
      {/* <ProfileTrips>{totalTrips.length} trips </ProfileTrips> */}
    </Background>
  );
};

export default observer(ProfileScreen);

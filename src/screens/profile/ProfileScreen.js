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
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { View } from "native-base";
import tripStore from "../../stores/tripStore";
import TripItem from "../../components/trip/TripItem";
import MiniTripItem from "../../components/trip/MiniTripItem";

const ProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params;
  console.log("user id", userId);
  if (!profileStore.profile) {
    return <Spinner />;
  }

  const profile = profileStore.profile;

  //number of trips >> Comment out la2ana promise uncomment if you solve the issue
  const totalTrips = tripStore.trips.filter((trip) => trip.userId === userId);
  console.log(
    "🚀 ~ file: ProfileScreen.js ~ line 34 ~ ProfileScreen ~ totalTrips",
    totalTrips
  );
  const tripsList = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <MiniTripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Profile</Title>

      {authStore.user?.profileId === profile.id && (
        <Title
          onPress={() =>
            navigation.navigate("EditProfileScreen", { profile: profile })
          }
        >
          Edit
        </Title>
      )}

      <ProfileImage
        source={{ uri: profile.image }}
        style={{ borderRadius: "100%" }}
      />
      <ProfileBio>{profile.bio}</ProfileBio>

      {/* please uncomment this vvvv if you solve the promise issue */}
      <ProfileTrips>{totalTrips.length} trips </ProfileTrips>
      {/* <ScrollView horizontal={true}>{tripsList}</ScrollView> */}
      <View> {tripsList} </View>
    </Background>
  );
};

export default observer(ProfileScreen);

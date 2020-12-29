import React from "react";
import { Title } from "react-native-paper";
import { observer } from "mobx-react";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
// import tripStore from "../../stores/tripStore";
//components

import BackButton from "../../components/BackButton";

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from "./styles";
import { Spinner, View } from "native-base";
import UserTripList from "../../components/trip/UserTripList";

const ProfileScreen = ({ route, navigation }) => {
  if (!profileStore.profile) {
    return <Spinner />;
  }
  const profile = profileStore.profile;

  //number of trips >> Comment out la2ana promise uncomment if you solve the issue
  // const totalTrips = tripStore.trips.filter((trip) => trip.userId === userId);

  return (
    <>
      <BackButton goBack={navigation.goBack} />

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginTop: "20%",
          marginLeft: "10%",
        }}
      >
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

        {/* <UserTripList userId={authStore.user.id} /> */}
        {/* please uncomment this vvvv if you solve the promise issue */}
        {/* <ProfileTrips>{totalTrips.length} trips </ProfileTrips> */}
      </View>
    </>
  );
};

export default observer(ProfileScreen);

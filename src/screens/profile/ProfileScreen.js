import React from "react";
import { Title } from "react-native-paper";
import { observer } from "mobx-react";
//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";

//components

import BackButton from "../../components/BackButton";

//styles

import { ProfileImage, ProfileBio, ProfileTrips } from "./styles";
import { Spinner, View } from "native-base";

import { ScrollView, Text, TouchableOpacity } from 'react-native'
import tripStore from '../../stores/tripStore'
import TripItem from '../../components/trip/TripItem'
import MiniTripItem from '../../components/trip/MiniTripItem'


const ProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params

  if (!profileStore.profile) {
    return <Spinner />;
  }

  const profile = profileStore.profile;



  const totalTrips = tripStore.trips.filter((trip) => trip.userId === userId)

  const tripsList = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <MiniTripItem trip={trip} key={trip.id} navigation={navigation} />
    ))


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

          <ProfileTrips>{totalTrips.length} trips </ProfileTrips>
      {/* <ScrollView horizontal={true}>{tripsList}</ScrollView> */}
      {tripsList}
      </View>
    </>

   

  );
};

export default observer(ProfileScreen);

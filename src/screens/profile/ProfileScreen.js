import React from "react";

//native base
import { Spinner } from "native-base";
import { Title } from "react-native-paper";

// mobx
import { observer } from "mobx-react";

//stores
import profileStore from "../../stores/profileStore";
import authStore from "../../stores/authStore";
import tripStore from "../../stores/profileStore";
//components
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from "./styles";

const ProfileScreen = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />;

  const userId = route.params;

  //   const totalTrips = tripStore.trips.filter(
  //     (trip) => trip.userId === +profile.userId
  //   );
  //   const edit = "";
  //   if (authStore.user) {
  //     if (authStore.user.id === profile.userId) {
  //       edit = (
  //         <>
  //           <Title
  //             onPress={() =>
  //               navigation.navigate("EditTripScreen", { trip: trip })
  //             }
  //           >
  //             edit
  //           </Title>
  //         </>
  //       );
  //     }
  //   }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Title>{edit}</Title> */}

      {/* <ProfileImage
        source={{ uri: profile.image }}
        style={{ borderRadius: "100%" }}
      /> */}

      {/* <ProfileBio>{profile.bio}</ProfileBio>

      <ProfileTrips>{totalTrips.length} trips </ProfileTrips> */}
    </Background>
  );
};

export default observer(ProfileScreen);

import React from 'react'

//native base
import { Spinner } from 'native-base'
import { Title } from 'react-native-paper'
import { SafeAreaView, View } from 'react-native'

// mobx
import { observer } from 'mobx-react'

//stores
import profileStore from '../../stores/profileStore'
import authStore from '../../stores/authStore'

//components
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from './styles'
import { Wrapper } from '../../components/trip/styles'

const ProfileScreen = ({ route, navigation }) => {
  //fetch profile
  // const userId = route.params;
  const userId = authStore.user.id
  const profile = profileStore.profile //profile is a promise

  //only user can edit his profile
  let edit = ''
  if (authStore.user) {
    if (authStore.user.id === userId) {
      edit = (
        <>
          <Title
            onPress={() =>
              navigation.navigate('EditTripScreen', { trip: trip })
            }>
            edit
          </Title>
        </>
      )
    }
  }

  //number of trips >> Comment out la2ana promise uncomment if you solve the issue
  //   const totalTrips = tripStore.trips.filter(
  //     (trip) => trip.userId === userId
  //   );
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Profile</Title>
      <Title
        onPress={
          (() => navigation.navigate('EditProfileScreen'), { profile: profile })
        }>
        {edit}
      </Title>

      <ProfileImage
        source={{ uri: profile.image }}
        style={{ borderRadius: '100%' }}
      />
      <ProfileBio>{profile.bio}</ProfileBio>
      {console.log('bio', profile)}

      {/* please uncomment this vvvv if you solve the promise issue */}
      {/* <ProfileTrips>{totalTrips.length} trips </ProfileTrips> */}
    </Background>
  )
}

export default observer(ProfileScreen)

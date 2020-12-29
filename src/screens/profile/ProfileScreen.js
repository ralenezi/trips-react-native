import React from 'react'
import { Title, Surface } from 'react-native-paper'
import { observer } from 'mobx-react'
//stores
import profileStore from '../../stores/profileStore'
//components
import BackButton from '../../components/BackButton'

//styles
import { ProfileImage, ProfileBio, ProfileTrips } from './styles'
import { Spinner } from 'native-base'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import tripStore from '../../stores/tripStore'
import MiniTripItem from '../../components/trip/MiniTripItem'

const ProfileScreen = ({ route, navigation }) => {
  const { userId } = route.params
  console.log('user id', userId)
  if (!profileStore.profile) {
    return <Spinner />
  }
  const profile = profileStore.profile
  const totalTrips = tripStore.trips.filter((trip) => trip.userId === userId)
  console.log(
    '🚀 ~ file: ProfileScreen.js ~ line 34 ~ ProfileScreen ~ totalTrips',
    totalTrips
  )
  const tripsList = tripStore.trips
    .filter((trip) => trip.userId === userId)
    .map((trip) => (
      <MiniTripItem trip={trip} key={trip.id} navigation={navigation} />
    ))

  return (
    <SafeAreaView>
      <Surface style={styles.surface}>
        <BackButton goBack={navigation.goBack} />
        <Title>Profile</Title>

        <ProfileImage
          source={{ uri: profile.image }}
          style={{ borderRadius: '100%' }}
        />
        <ProfileBio>{profile.bio}</ProfileBio>
        <ProfileTrips>{totalTrips.length} trips </ProfileTrips>
        <ScrollView horizontal={true}>{tripsList}</ScrollView>
      </Surface>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 70,
  },
})

export default observer(ProfileScreen)

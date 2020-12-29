//react-native
import { Card, Title, Surface } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'

//react

import React from 'react'

//observer
import { observer } from 'mobx-react'
import tripStore from '../../stores/tripStore'
import authStore from '../../stores/authStore'
import { TouchableOpacity } from 'react-native'
import profileStore from '../../stores/profileStore'

const MiniTripItem = ({ trip, navigation }) => {
  const handlePress = () => {
    profileStore.fetchProfile(trip.userId)
    navigation.navigate('ProfileScreen', { userId: trip.userId })
  }
  return (
    <>
      <Surface style={styles.surface}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TripDetail', { trip: trip })}>
          <Avatar.Image size={124} source={{ uri: trip.image }} />
        </TouchableOpacity>
      </Surface>
    </>
  )
}

export default observer(MiniTripItem)

const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },
})

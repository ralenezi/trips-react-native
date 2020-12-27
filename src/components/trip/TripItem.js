//react-native
import { Card, Title, Paragraph, Surface, Text } from 'react-native-paper'
import { StyleSheet } from 'react-native'

//react
import React from 'react'

//observer
import { observer } from 'mobx-react'
import tripStore from '../../stores/tripStore'
import authStore from '../../stores/authStore'
import { TouchableOpacity } from 'react-native'

const TripItem = ({ trip, navigation }) => {
  let screenItem = ''
  if (authStore.user) {
    if (authStore.user.id === trip.userId) {
      screenItem = (
        <>
          <Title onPress={() => tripStore.deleteTrip(trip.id)}>🗑</Title>
        </>
      )
    }
  } else screenItem = ''
  return (
    <Card>
      <TouchableOpacity
        onPress={() => navigation.navigate('TripDetail', { trip: trip })}>
        <Card.Cover source={{ uri: trip.image }} />
      </TouchableOpacity>
      <Surface style={styles.surface}>
        <Title>{trip.title}</Title>
        <Title>By: {trip.user.username}</Title>
        <Title>{screenItem}</Title>
      </Surface>
    </Card>
  )
}

// export default observer(TripItem)
export default TripItem
const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },
})

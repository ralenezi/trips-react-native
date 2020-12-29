import React from 'react'
import { Title, Surface } from 'react-native-paper'
import { Spinner } from 'native-base'
import { observer } from 'mobx-react'
import tripStore from '../../stores/tripStore'
import BackButton from '../../components/BackButton'
import authStore from '../../stores/authStore'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
//styles
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailDescription,
} from './styles'

const TripDetailScreen = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />

  const { trip } = route.params
  let screenItem = ''
  if (authStore.user) {
    if (authStore.user.id === trip.userId) {
      screenItem = (
        <>
          <Title
            onPress={() =>
              navigation.navigate('EditTripScreen', { trip: trip })
            }>
            edit
          </Title>
          <Text onPress={() => tripStore.deleteTrip(trip.id)}>{'\n'}🗑</Text>
        </>
      )
    }
  } else screenItem = ''
  return (
    <SafeAreaView>
      <Surface style={styles.surface}>
        <BackButton goBack={navigation.goBack} />
        <TripDetailTitle>{trip.title}</TripDetailTitle>
        <TripDetailImage source={{ uri: trip.image }} />
        <TripDetailDescription>{trip.description}</TripDetailDescription>
        <Title>{screenItem}</Title>
      </Surface>
    </SafeAreaView>
  )
}

export default observer(TripDetailScreen)

const styles = StyleSheet.create({
  surface: {
    padding: 50,
  },
})

import React from 'react'
import { Card, Title, Surface } from 'react-native-paper'

//native base
import { Spinner } from 'native-base'

// mobx
import { observer } from 'mobx-react'

//stores
import tripStore from '../../stores/tripStore'

//components
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'

//styles
import {
  TripDetailTitle,
  TripDetailImage,
  TripDetailDescription,
} from './styles'
import authStore from '../../stores/authStore'

const TripDetailScreen = ({ route, navigation }) => {
  if (tripStore.loading) return <Spinner />

  const { trip } = route.params
  let screenItem = ''
  if (authStore.user) {
    if (authStore.user.id === trip.userId) {
      screenItem = (
        <>
          <Title onPress={() => tripStore.deleteTrip(trip.id)}>🗑</Title>
          <Title
            onPress={() =>
              navigation.navigate('EditTripScreen', { trip: trip })
            }>
            edit
          </Title>
        </>
      )
    }
  } else screenItem = ''
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />

      <TripDetailImage source={{ uri: trip.image }} />
      <TripDetailTitle>{trip.title}</TripDetailTitle>
      <TripDetailDescription>{trip.description}</TripDetailDescription>

      <Title>{screenItem}</Title>
      {/* </TripDetailWrapper> */}

    </Background>
  )
}

export default observer(TripDetailScreen)

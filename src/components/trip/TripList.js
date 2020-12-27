//native base
import { List, Spinner } from 'native-base'

import React from 'react'

//Components
import TripItem from './TripItem'
// mobx
import { observer } from 'mobx-react'
//stores
import tripStore from '../../stores/tripStore'
import authStore from '../../stores/authStore'

//styles
import { Wrapper } from './styles'
import { ScrollView, Text } from 'react-native'
import { Title, TripImage } from './styles'

const TripList = ({ navigation }) => {
  if (tripStore.loading || tripStore.trips.length === 0) return <Spinner />
  const tripsList = tripStore.trips
    .filter((trip) =>
      authStore.user ? trip.userId != authStore.user.id : trip
    )
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ))

  return (
    <>
      <>{tripsList}</>
    </>
  )
}

export default observer(TripList)

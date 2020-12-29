import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

//styles
import { Title } from '../../components/trip/styles'

//trip component

import Button from "../../components/Button";
import TripList from "../../components/trip/TripList";


//stores
import authStore from '../../stores/authStore'
import { observer } from 'mobx-react'
import { Left } from 'native-base'

const TripListScreen = ({ navigation }) => {
  let screenItem = ''

  //logout
  const logout = () => {
    authStore.signout

    navigation.replace('LoginScreen')
  }
  if (authStore.user) {
    screenItem = (
      <>
        <Left style={{ padding: 8 }}>
          <Title>Hello, {authStore.user.username}</Title>
        </Left>
        <Button onPress={() => navigation.navigate('AddTripScreen')}>
          add new trip
        </Button>
        <Button onPress={() => navigation.navigate('ProfileScreen')}>
          go to profile
        </Button>
        {/* logout */}
        <Button onPress={logout}>logout</Button>
      </>
    )
  } else
    screenItem = (
      <Button onPress={() => navigation.navigate('LoginScreen')}>
        Log in to add trips
      </Button>
    )

  return (
    <SafeAreaView>
      <ScrollView>
        {screenItem}
        <TripList navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default observer(TripListScreen)

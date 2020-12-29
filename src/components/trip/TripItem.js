//react-native

import { Card, Title, Surface } from 'react-native-paper'
import { StyleSheet, Text } from 'react-native'
//react
import React from 'react'
//observer
import { observer } from 'mobx-react'
import { TouchableOpacity } from 'react-native'
import profileStore from '../../stores/profileStore'

const TripItem = ({ trip, navigation }) => {

  const handlePress = () => {

    profileStore.fetchProfile(trip.userId)
    navigation.navigate('ProfileScreen', { userId: trip.userId })
  }

  return (
    <Card>
      <TouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Card.Cover source={{ uri: trip.image }} />
      </TouchableOpacity>
      <Surface style={styles.surface}>
        <Title>{trip.title}</Title>
        <Title onPress={handlePress}>By: {trip.user.username}</Title>
      </Surface>
    </Card>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },

  boldfont: {
    fontWeight: "bold",
  },
});

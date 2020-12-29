//react-native
import { Surface } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import { Avatar } from 'react-native-paper'
//react
import React from 'react'
//observer
import { observer } from 'mobx-react'
import { TouchableOpacity } from 'react-native'
import { ListItem } from 'native-base'

const MiniTripItem = ({ trip, navigation }) => {
  return (
    <ListItem>
      <Surface style={styles.surface}>
        <TouchableOpacity
          onPress={() => navigation.navigate('TripDetail', { trip: trip })}>
          <Avatar.Image size={124} source={{ uri: trip.image }} />
        </TouchableOpacity>
      </Surface>
    </ListItem>
  )
}

export default observer(MiniTripItem)

const styles = StyleSheet.create({
  surface: {
    padding: 8,
  },
})

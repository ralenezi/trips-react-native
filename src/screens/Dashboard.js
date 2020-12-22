import React from 'react'
import Backgroundz from './Backgroundz'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { Avatar, BottomNavigation, Text } from 'react-native-paper'
import { View } from 'react-native'

const Dashboard = ({ navigation }) => {
  const MusicRoute = () => <Backgroundz navigation={navigation} />
  const AlbumsRoute = () => <Text>Albums</Text>
  const RecentsRoute = () => <Text>Recents</Text>
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ])

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}

export default Dashboard
/*

*/

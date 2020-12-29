//react
import React, { useState } from 'react'

import BackButton from '../components/BackButton'
// components
import Background from '../components/Background'
import Button from '../components/Button'
import Header from '../components/Header'
import TextInput from '../components/TextInput'
// stores
import authStore from '../stores/authStore'

const ProfileScreen = () => {
  const { profile } = route.params
  // state
  const [profileEdit, setProfile] = useState(profile)

  // add data to backend
  const handleEdit = () => {
    authStore.editProfile(profileEdit)
    navigation.navigate('TripListScreen')
  }

  //form
  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}

      <Header>Profile</Header>
      <TextInput
        label='Image'
        value={profileEdit.image}
        onChangeText={(image) => setProfile({ ...profileEdit, image })}
      />
      <TextInput
        label='Bio'
        value={profileEdit.bio}
        onChangeText={(bio) => setProfile({ ...profileEdit, bio })}
      />

      <Button mode='contained' onPress={handleEdit}>
        Edit
      </Button>
    </Background>
  )
}

export default ProfileScreen

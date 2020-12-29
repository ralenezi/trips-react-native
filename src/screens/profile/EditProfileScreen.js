import React from 'react'
import { Title } from 'react-native-paper'
import profileStore from '../../stores/profileStore'
//components
import Background from '../../components/Background'
import BackButton from '../../components/BackButton'

const EditProfileScreen = ({ route, navigation }) => {
  const { profile } = route.params
  const [profileEdit, setProfile] = useState(profile)

  //add data to backend
  const handleEdit = () => {
    profileStore.editProfile(profileEdit)
    navigation.navigate('ProfileScreen')
  }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Title>Edit your profile</Title>
      <TextInput
        label='Image'
        value={profileEdit.image}
        onChangeText={(image) => setProfile({ ...profileEdit, image })}
      />
      <TextInput
        label='Bio'
        value={profileEdit.description}
        onChangeText={(bio) => setProfile({ ...profileEdit, bio })}
      />
      <Button mode='contained' onPress={handleEdit}>
        Edit
      </Button>
    </Background>
  )
}

export default EditProfileScreen


import React, { useState } from "react";
import { TextInput } from "react-native";
//native base
import { Title } from "react-native-paper";
// mobx
import { observer } from "mobx-react";
//stores
import profileStore from "../../stores/profileStore";
//components
import Background from "../../components/Background";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";


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
        label="Bio"
        value={profileEdit.bio}
        onChangeText={(bio) => setProfile({ ...profileEdit, bio })}
      />
      <Button onPress={handleEdit}>Edit</Button>
    </Background>
  )
}

export default observer(EditProfileScreen);

import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Avatar } from 'react-native-paper'
import BackButton from '../../components/BackButton'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Logo from '../../components/Logo'
import { Text } from 'react-native-paper'
import TextInput from '../../components/TextInput'
import authStore from '../../stores/authStore'
import { emailValidator } from '../../helpers/emailValidator'
import { observer } from 'mobx-react'
import { passwordValidator } from '../../helpers/passwordValidator'
import { theme } from '../../core/theme'
import { usernameValidator } from '../../helpers/usernameValidator'

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const usernameError = usernameValidator(username.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || usernameError) {
      setUsername({ ...username, error: usernameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
    }
    await authStore.signup(user)
    if (authStore.user) navigation.navigate('TripListScreen')

    //   navigation.reset({
    //     index: 0,
    //     routes: [{ user: "Dashboard" }],
    //   });
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Avatar.Icon size={124} icon='account-circle-outline' />
      {/* <Logo /> */}
      <Header>Create Account</Header>
      <TextInput
        label='Username'
        returnKeyType='next'
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: '' })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize='none'
      />
      <TextInput
        label='Email'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <TextInput
        label='Password'
        returnKeyType='done'
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode='contained'
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}>
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default observer(RegisterScreen)

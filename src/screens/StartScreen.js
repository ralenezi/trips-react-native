import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { Avatar } from 'react-native-paper'

const StartScreen = ({ navigation }) => (
  <Background>
    {/* <Logo /> */}
    <Avatar.Icon size={124} icon='account-circle-outline' />
    <Header>Login Template</Header>
    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>
    <Button mode='contained' onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode='outlined'
      onPress={() => navigation.navigate('RegisterScreen')}>
      Sign Up
    </Button>
  </Background>
)

export default StartScreen

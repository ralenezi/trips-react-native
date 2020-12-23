import { Avatar, BottomNavigation, Text } from "react-native-paper";

import Background from "../components/Background";
import Button from "../components/Button";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Paragraph from "../components/Paragraph";
import React from "react";
import { View } from "react-native";

// REVIEW: cleanup imports

const Backgroundz = ({ navigation }) => {
  return (
    <Background>
      <Avatar.Icon size={124} icon="account-circle-outline" />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
};

export default Backgroundz;

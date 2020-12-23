import { Image, StyleSheet, TouchableOpacity } from "react-native";

import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require("../assets/arrow_back.png")} />
  </TouchableOpacity>
);

// REVIEW: move styles into its own file
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10 + getStatusBarHeight(),
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default BackButton;

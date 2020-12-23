import { Image, StyleSheet } from "react-native";

import React from "react";

const Logo = () => (
  <Image source={require("../assets/logo.png")} style={styles.image} />
);

// REVIEW: move styles into its own file

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});

export default Logo;

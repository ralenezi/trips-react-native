import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import React from "react";
import { theme } from "../core/theme";

const Background = ({ children }) => (
  <ImageBackground
    source={require("../assets/background_dot.png")}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

// REVIEW: move styles into its own file

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    maxWidth: 340,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Background;

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { theme } from "../core/theme";

import { View } from "native-base";

const Background = ({ children }) => (
  <ImageBackground
    source={require("../assets/background_dot.jpg")}
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.marginview}>{children}</View>
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba( 0, 0, 0, 0.6 )",
  },

  marginview: {
    flex: 1,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Background;

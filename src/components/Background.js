import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { theme } from "../core/theme";

import { View } from "native-base";

const Background = ({ children }) => (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    {children}
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});

export default Background;

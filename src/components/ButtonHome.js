import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";

const ButtonHome = ({ mode, style, ...props }) => (
  <PaperButton
    style={styles.button}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: "rgba(160, 216, 238, 0.77)",
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "black",
  },
});

export default ButtonHome;

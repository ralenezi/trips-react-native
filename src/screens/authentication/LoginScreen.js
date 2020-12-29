import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Avatar } from "react-native-paper";
import BackButton from "../../components/BackButton";
import Background from "../../components/BackgroundSignIn";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { Text } from "react-native-paper";
import TextInput from "../../components/TextInput";
import authStore from "../../stores/authStore";
import { usernameValidator } from "../../helpers/usernameValidator";
import { observer } from "mobx-react";
import { passwordValidator } from "../../helpers/passwordValidator";
import { theme } from "../../core/theme";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = async () => {
    const usernameError = usernameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    if (usernameError || passwordError) {
      setUsername({ ...username, error: usernameError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const user = {
      username: username.value,
      password: password.value,
    };
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("TripListScreen");

    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: "Dashboard" }],
    // });
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      {/* <Logo /> */}
      <Avatar.Icon size={124} icon="account-circle-outline" />
      <Header>Welcome back.</Header>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername({ value: text, error: "" })}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
        autoCompleteType="username"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default observer(LoginScreen);

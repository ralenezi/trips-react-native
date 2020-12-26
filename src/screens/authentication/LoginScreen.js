import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Avatar } from "react-native-paper";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Logo from "../../components/Logo";
import { Text } from "react-native-paper";
import TextInput from "../../components/TextInput";
import authStore from "../../stores/authStore";
import { emailValidator } from "../../helpers/emailValidator";
import { observer } from "mobx-react";
import { passwordValidator } from "../../helpers/passwordValidator";
import { theme } from "../../core/theme";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    const user = {
      email: email.value,
      password: password.value,
    };
    await authStore.signup(user);
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
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
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

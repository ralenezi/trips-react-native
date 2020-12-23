//screens
import {
  Dashboard,
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  StartScreen,
} from "./src/screens";

import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import React from "react";
//components
import TripList from "./src/components/trip/TripList";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";

const Stack = createStackNavigator();

const App = () => {
  // REVIEW: move your navigation into its own component
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="TripList"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="TripList" component={TripList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

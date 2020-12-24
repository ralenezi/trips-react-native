//screens
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  TripListScreen,
  AddTripScreen,
} from "./src/screens";

import LoginScreen from "./src/screens/authentication/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-native-paper";
import React from "react";
import RegisterScreen from "./src/screens/authentication/RegisterScreen";
//components
import TripList from "./src/components/trip/TripList";

import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "./src/core/theme";

import TripDetails from "./src/components/trip/TripDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen name="TripListScreen" component={TripListScreen} />
          <Stack.Screen name="TripDetail" component={TripDetails} />
          <Stack.Screen name="AddTripScreen" component={AddTripScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

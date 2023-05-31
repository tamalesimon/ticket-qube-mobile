import { View, SafeAreaView, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, icons } from "../constants";

import GetStarted from "../screens/welcome/Getstarted";
import Signin from "../screens/authentication/Signin";
import Signup from "../screens/authentication/Signup";
import Verify from "../screens/authentication/Verificationcode";
import ForgotPassword from "../screens/authentication/Forgotpwd";
import ResetPassword from "../screens/authentication/ResetPassword"
import ResetSuccess from "../screens/authentication/ResetSuccess";
import { TouchableOpacity } from "react-native-web";

const Stack = createNativeStackNavigator();

export default function page() {
  const { navigate } = useRouter();
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Get Started"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          }}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          }}
        />
        <Stack.Screen
          name="ResetSuccess"
          component={ResetSuccess}
          options={{
            headerStyle: {
            backgroundColor: COLORS.white, // make the header transparent
            elevation: 0, // remove the shadow on Android
            borderBottomWidth: 0, // remove the border bottom on iOS
          },
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          headerLeft:() =>(
            <View style={{ marginLeft: 24}}>
                <TouchableOpacity>
                    <icons.CloseIcon/>
                </TouchableOpacity>
            </View>
          )
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

import { View, SafeAreaView, Text, ScrollView, TouchableOpacity } from "react-native";
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
          options={screenOptions}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={screenOptions}
        />
        <Stack.Screen
          name="Verify"
          component={Verify}
          options={screenOptions}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={screenOptions}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={screenOptions}
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
          headerTitle:' ',
          headerShadowVisible:false,
          headerTitleStyle: {
            display: "none", // hide the header title
          },
          headerLeft:() =>(
            <View>
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

const screenOptions = {
  headerStyle: {
  backgroundColor: COLORS.white, // make the header transparent
  elevation: 0, // remove the shadow on Android
  borderBottomWidth: 0, // remove the border bottom on iOS
},
headerTitle:' ',
headerShadowVisible:false,
headerTitleStyle: {
  display: "none", // hide the header title
},
}

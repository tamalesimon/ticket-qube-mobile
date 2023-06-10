import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import { COLORS, icons, FONTS } from "../constants";

import { HeaderLeft, HeaderRight } from "../components";

import { Signin, Signup, ForgotPassword, ResetPassword, ResetSuccess, Verify } from "../screens/authentication";
import { Location, FollowOrganiser, PickInterest  } from "../screens/onboarding";
import { GetStarted } from "../screens/welcome";
import { Home } from "../screens/home";

const Stack = createNativeStackNavigator();

export default function page() {
  const navigation = useNavigation();
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
      <Stack.Group>
          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              ...screenOptions,
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('FollowOrganiser')}>
                    <Text style={styles.skipText}>Skip for now</Text>
                </TouchableOpacity>
              )
              }}
          />
          <Stack.Screen
            name="FollowOrganiser"
            component={FollowOrganiser}
            options={{
              ...screenOptions,
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('PickInterest')}>
                    <Text style={styles.skipText}>Skip for now</Text>
                </TouchableOpacity>
              )
              }}
          />
          <Stack.Screen
            name="PickInterest"
            component={PickInterest}
            options={{
              ...screenOptions,
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.skipText}>Skip for now</Text>
                </TouchableOpacity>
              )
              }}
          />
      </Stack.Group>
          
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            ...screenOptions,
            headerRight: () => (
              <HeaderRight/>
            ),
            headerLeft: ()  => (
              <HeaderLeft/>
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

const styles = StyleSheet.create({
  skipText: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight:500,
    fontSize:14,
    color:COLORS.primaryBase
  }
})

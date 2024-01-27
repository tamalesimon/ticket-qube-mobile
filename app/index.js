import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, ICONS, FONTS } from "../constants";
import { Signin, Signup, ForgotPassword, ResetPassword, ResetSuccess, Verify } from "../screens/authentication";
import { Location, FollowOrganiser, PickInterest } from "../screens/onboarding";
import { GetStarted } from "../screens/welcome";
import { EventDetails, GetTicket, SelectPayment, DetailsOrder, ContactInfo, TicketOrderCompleted } from "../screens/event";
import { eventDetailsScreenOptions, genericScreenOptions, genericNoTitleScreenOptions, WhiteBGScreenOptions, SelectPaymentsScreenOptions, HeadersWithClose, ticketsScreenOptions } from "../components/header/screenOptions";
import Tabs from "../screens/tabs/Tabs";
import EventMain from "../screens/EventMain";
import Tickets from "../screens/ticket/Ticket";
import TicketQrcode from "../screens/ticket/TicketQrcode";
import TicketReciept from "../screens/ticket/TicketReciept";
import DateofBirth from "../screens/onboarding/DateofBirth";


const Stack = createNativeStackNavigator();

export default function Page() {
  const navigation = useNavigation();
  // const { isSignedUp, isVerified, isLoggedIn } = useSelector(state => state.auth)
  // const [isToken, setIsToken] = useState(null)
  // const [isExpiring, setIsExpiring] = useState(null)

  // useEffect(() => {
  //   AsyncStorage.getItem("QubeFirstLaunch").then(async (value) => {
  //     if (value === null) {
  //       AsyncStorage.setItem("QubeFirstLaunch", "true");
  //       navigation.navigate("Get Started");
  //     } else {
  //       const authDetails = await AsyncStorage.getItem("qubeUserLoginDetails")
  //       const tokenDetails = JSON.parse(authDetails);
  //       console.log(tokenDetails)
  //       if (tokenDetails) {
  //         setIsExpiring(tokenDetails.expiresAt)
  //         setIsToken(tokenDetails.token)
  //         navigation.navigate("Signin");
  //       } else {
  //         navigation.navigate("Get Started");
  //       }
  //     }
  //   })
  // }, [])

  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Get Started"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={screenOptions}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
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
            headerTitle: ' ',
            headerShadowVisible: false,
            headerTitleStyle: {
              display: "none", // hide the header title
            },
            headerLeft: () => (
              <View>
                <TouchableOpacity>
                  <icons.CloseIcon />
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="DOB"
          component={DateofBirth}
          options={
            genericNoTitleScreenOptions
          }
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={
            genericNoTitleScreenOptions
          }
        />
        <Stack.Screen
          name="FollowOrganiser"
          component={FollowOrganiser}
          options={{
            ...screenOptions,
            genericNoTitleScreenOptions,
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
            genericNoTitleScreenOptions,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('NavigationTabs')}>
                <Text style={styles.skipText}>Skip for now</Text>
              </TouchableOpacity>
            )
          }}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="NavigationTabs"
          component={Tabs}
          options={{
            headerShown: false
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
    //   //Event screens
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="EventDetails"
    //       component={EventDetails}
    //       options={eventDetailsScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>


    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Event Details"
    //       component={EventDetails}
    //       options={eventDetailsScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Get a Ticket"
    //       component={GetTicket}
    //       options={genericScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Order Details"
    //       component={DetailsOrder}
    //       options={WhiteBGScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Contact Details"
    //       component={ContactInfo}
    //       options={WhiteBGScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
        // <Stack.Screen
        //   name="Select Payment"
        //   component={SelectPayment}
        //   options={SelectPaymentsScreenOptions}
        // />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Order Completed"
    //       component={TicketOrderCompleted}
    //       options={HeadersWithClose}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Tickets"
    //       component={Tickets}
    //       options={ticketsScreenOptions}
    //     />

    //     <Stack.Screen
    //       name="Ticket Receipt"
    //       component={TicketReciept}
    //       options={ticketsScreenOptions}
    //     />

    //     <Stack.Screen
    //       name="QR Code"
    //       component={TicketQrcode}
    //       options={ticketsScreenOptions}
    //     />

    //   </Stack.Group>
    // </Stack.Navigator>

    // <Stack.Navigator>
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="QR Code"
    //       component={TicketQrcode}
    //       options={ticketsScreenOptions}
    //     />
    //   </Stack.Group>
    // </Stack.Navigator>


  );
}


const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.white, // make the header transparent
    elevation: 0, // remove the shadow on Android
    borderBottomWidth: 0, // remove the border bottom on iOS
  },
  headerTitle: ' ',
  headerShadowVisible: false,
}

const styles = StyleSheet.create({
  skipText: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 500,
    fontSize: 14,
    color: COLORS.primaryBase,
    marginRight: 24
  }
})

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, ICONS, FONTS } from "../constants";
import store from "../store";
import { Provider } from "react-redux";
import { Signin, Signup, ForgotPassword, ResetPassword, ResetSuccess, Verify } from "../screens/authentication";
import { Location, FollowOrganiser, PickInterest } from "../screens/onboarding";
import { GetStarted } from "../screens/welcome";
import { EventDetails, GetTicket, SelectPayment, DetailsOrder, ContactInfo, TicketOrderCompleted } from "../screens/event";
import { eventDetailsScreenOptions, genericScreenOptions, WhiteBGScreenOptions, SelectPaymentsScreenOptions, HeadersWithClose, ticketsScreenOptions } from "../components/header/screenOptions";
import Tabs from "../screens/tabs/Tabs";
import EventMain from "../screens/EventMain";
import Tickets from "../screens/ticket/Ticket";


const Stack = createNativeStackNavigator();

export default function Page() {
  const navigation = useNavigation();
  return (
    // <Stack.Navigator>
    // //Authentication screens
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Get Started"
    //       component={GetStarted}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name="Signin"
    //       component={Signin}
    //       options={screenOptions}
    //     />
    //     <Stack.Screen
    //       name="Signup"
    //       component={Signup}
    //       options={screenOptions}
    //     />
    //     <Stack.Screen
    //       name="Verify"
    //       component={Verify}
    //       options={screenOptions}
    //     />
    //     <Stack.Screen
    //       name="ForgotPassword"
    //       component={ForgotPassword}
    //       options={screenOptions}
    //     />
    //     <Stack.Screen
    //       name="ResetPassword"
    //       component={ResetPassword}
    //       options={screenOptions}
    //     />
    //     <Stack.Screen
    //       name="ResetSuccess"
    //       component={ResetSuccess}
    //       options={{
    //         headerStyle: {
    //           backgroundColor: COLORS.white, // make the header transparent
    //           elevation: 0, // remove the shadow on Android
    //           borderBottomWidth: 0, // remove the border bottom on iOS
    //         },
    //         headerTitle: ' ',
    //         headerShadowVisible: false,
    //         headerTitleStyle: {
    //           display: "none", // hide the header title
    //         },
    //         headerLeft: () => (
    //           <View>
    //             <TouchableOpacity>
    //               <icons.CloseIcon />
    //             </TouchableOpacity>
    //           </View>
    //         )
    //       }}
    //     />
    //   </Stack.Group>

    //       //onBoarding screens
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="Location"
    //       component={Location}
    //       options={{
    //         ...screenOptions,
    //         headerRight: () => (
    //           <TouchableOpacity onPress={() => navigation.navigate('FollowOrganiser')}>
    //             <Text style={styles.skipText}>Skip for now</Text>
    //           </TouchableOpacity>
    //         )
    //       }}
    //     />
    //     <Stack.Screen
    //       name="FollowOrganiser"
    //       component={FollowOrganiser}
    //       options={{
    //         ...screenOptions,
    //         headerRight: () => (
    //           <TouchableOpacity onPress={() => navigation.navigate('PickInterest')}>
    //             <Text style={styles.skipText}>Skip for now</Text>
    //           </TouchableOpacity>
    //         )
    //       }}
    //     />
    //     <Stack.Screen
    //       name="PickInterest"
    //       component={PickInterest}
    //       options={{
    //         ...screenOptions,
    //         headerRight: () => (
    //           <TouchableOpacity onPress={() => navigation.navigate('NavigationTabs')}>
    //             <Text style={styles.skipText}>Skip for now</Text>
    //           </TouchableOpacity>
    //         )
    //       }}
    //     />
    //   </Stack.Group>

    //     //App index
    //   <Stack.Group>
    //     <Stack.Screen
    //       name="NavigationTabs"
    //       component={Tabs}
    //       options={{
    //         headerShown: false
    //       }}
    //     />
    //   </Stack.Group>

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
    //     <Stack.Screen
    //       name="Select Payment"
    //       component={SelectPayment}
    //       options={SelectPaymentsScreenOptions}
    //     />
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

    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Tickets"
          component={Tickets}
          options={ticketsScreenOptions}
        />
      </Stack.Group>
    </Stack.Navigator>


  );
}

// export default function Page(){
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

const screenOptions = {
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
}

const styles = StyleSheet.create({
  skipText: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 500,
    fontSize: 14,
    color: COLORS.primaryBase
  }
})

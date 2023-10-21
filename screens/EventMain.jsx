import React from 'react'
import { useNavigation } from "expo-router";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventDetails, GetTicket, SelectPayment, DetailsOrder, ContactInfo, TicketOrderCompleted } from './event'
import { eventDetailsScreenOptions, genericScreenOptions, WhiteBGScreenOptions, SelectPaymentsScreenOptions, HeadersWithClose } from "../components/header/screenOptions";

const Stack = createNativeStackNavigator();
const EventMain = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="Event Details" component={EventDetails} options={eventDetailsScreenOptions} />
      <Stack.Screen name="Get a Ticket" component={GetTicket} options={genericScreenOptions} />
      <Stack.Screen name="Contact Details" component={ContactInfo} options={WhiteBGScreenOptions} />
      <Stack.Screen name="Order Details" component={DetailsOrder} options={WhiteBGScreenOptions} />
      <Stack.Screen name="Select Payment" component={SelectPayment} options={SelectPaymentsScreenOptions} />
      <Stack.Screen name="Order Completed" component={TicketOrderCompleted} options={HeadersWithClose} />
    </Stack.Group>
  )
}

export default EventMain
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import FiveDayStrip from "../../screens/event/components/EventDateStrip"
import CalendarComponent from '../../components/Tickets/CalendarComponent';
import UpcomingPastTickets from '../../components/Tickets/UpcomingPastTickets';


export default function Tickets() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, }}>
      <CalendarComponent />
      <View style={styles.upcoming_past_tickets}>
        <UpcomingPastTickets />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upcoming_past_tickets: {
    paddingHorizontal: 24
  }
})

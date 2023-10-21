import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import FiveDayStrip from "../../screens/event/components/EventDateStrip"
import CalendarComponent from '../../components/Tickets/CalendarComponent';


export default function Tickets() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray100, flex: 1, }}>
      <CalendarComponent/>
      {/* <Text>Tickets</Text> */}
    </SafeAreaView>
  );
}

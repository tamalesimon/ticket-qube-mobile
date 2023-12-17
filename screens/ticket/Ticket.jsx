import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import FiveDayStrip from "../../screens/event/components/EventDateStrip"
import CalendarComponent from '../../components/Tickets/CalendarComponent';
import UpcomingPastTickets from '../../components/Tickets/UpcomingPastTickets';


export default function Tickets() {
  const tabOptions = [
    { label: "Upcoming", value: "upcoming" },
    { label: "Past", value: "past" }
  ];
  const [selected, setSelected] = useState(tabOptions[0].value)
  const handleTabPress = (tab) => {
    setSelected(tab)
  }
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, }}>
      <CalendarComponent />
      <View style={styles.tabContainer}>
        {tabOptions.map((tabOption) => (
          <TouchableOpacity style={[styles.tab, selected === tabOption.value && styles.tabSelected]} onPress={() => handleTabPress(tabOption.value)}>
            <Text style={[styles.tabText, selected === tabOption.value && styles.tabTextSelected]}>{tabOption.label}</Text>
          </TouchableOpacity>
        ))
        }
      </View>
      <ScrollView style={styles.upcoming_past_tickets}>
        <UpcomingPastTickets />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upcoming_past_tickets: {
    paddingHorizontal: 24
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 4,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginHorizontal: 24,
    marginTop: 16
  },
  tab: {
    paddingHorizontal: 47.25,
    paddingVertical: 7,
    borderRadius: 8,
    width: '50%'
  },
  tabSelected: {
    backgroundColor: COLORS.secondaryBase,
  },
  tabText: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400,
    textAlign: 'center'
  },
  tabTextSelected: {
    color: COLORS.white,
    fontWeight: 700,
    fontSize: 12,
    lineHeight: 18
  }
})

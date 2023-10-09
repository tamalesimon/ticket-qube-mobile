import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';


export default function Tickets() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
      <Text>Tickets</Text>
    </SafeAreaView>
  );
}

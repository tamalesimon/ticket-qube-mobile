import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../../constants';

export default function HeaderRight() {
  return (
    <View>
      <TouchableOpacity style={styles.bellNotificationTitle}>
        <ICONS.NotificationBell />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bellNotificationTitle: {
    paddingVertical: 12,
    paddingHorizontal: 13.5,
    borderRadius: 12,
    backgroundColor: COLORS.gray50
  }
})
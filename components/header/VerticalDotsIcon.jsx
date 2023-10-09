import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';

export default function VerticalDots() {
  return (
    <View>
      <TouchableOpacity style={styles.dots}>
        <ICONS.VerticalDotsIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  dots: {
    paddingVertical: 12,
    paddingHorizontal: 13.5,
    borderRadius: 12,
  }
})
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../../constants';

export default function BackLeft({ handlePress }) {
  return (
    <View>
      <TouchableOpacity style={styles.Arrow} onPress={handlePress}>
        <ICONS.ArrowLeftIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Arrow: {
    paddingVertical: 12,
    // paddingHorizontal:13.5,
    borderRadius: 12,
  }
})
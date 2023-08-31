import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../../constants';

export default function BackLeft() {
  return (
      <View>
        <TouchableOpacity style={styles.Arrow}>
            <icons.ArrowLeftIcon/>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    Arrow: {
        paddingVertical:12,
        // paddingHorizontal:13.5,
        borderRadius: 12,
}
})
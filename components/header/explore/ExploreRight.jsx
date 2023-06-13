import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../../constants';

export default function ExploreRight() {
  return (
      <View>
        <TouchableOpacity style={styles.Filter}>
            <icons.FilterIcon/>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
    Filter: {
        paddingVertical:12,
        paddingHorizontal:13.5,
        borderRadius: 12,
}
})
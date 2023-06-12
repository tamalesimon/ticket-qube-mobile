import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';

export default function HeaderLeft() {
  return (
      <View>
        <Text style={styles.subTitle}>Find events near</Text>
        <Text style={styles.locationTitle}>Ntinda, Kampala</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subTitle: {
    fontSize:12,
    fontFamily:FONTS.NotoSansJPRegular,
    color: COLORS.gray400
  },
  locationTitle: {
    fontSize:18,
    fontWeight:700,
    fontFamily:FONTS.NotoSansJPRegular,
    color: COLORS.grayBase
  },
  bellNotificationTitle: {
    paddingVertical:12,
    paddingHorizontal:13.5,
    borderRadius: 12,
    backgroundColor:COLORS.gray50
  }
})

import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { COLORS, FONTS  } from "../../constants";

export default function LoadingIndicator() {
  return (
    <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
      <ActivityIndicator color={COLORS.primaryBase} style={styles.indicator} size={'large'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    padding: 12,
    backgroundColor: COLORS.gray50,
    borderRadius: 12
  },
})

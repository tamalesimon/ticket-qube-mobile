import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';


export default function Profile() {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1,  padding:24}}>
          <Text>Profile</Text>
     </SafeAreaView>
  );
}

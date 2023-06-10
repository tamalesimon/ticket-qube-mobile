import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1,  padding:24}}>
          <View style={{ marginBottom: 24}} >
            <InputField
                              placeholder="Search for events"
                              placeholderTextColor={COLORS.gray400}
                              icon={icons.SearchIcon}
                              inputType={'text'}
                          />
          </View>
     </SafeAreaView>
  );
}

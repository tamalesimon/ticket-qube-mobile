import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { icons, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import Upcoming from './Upcoming';
import Suggestions from './Suggestions';

export default function HomeTabs() {
  return (
    <SafeAreaView style={{backgroundColor:COLORS.white, flex:1,  padding:24}}>
          <View style={{ marginBottom: 12}} >
            <InputField
                placeholder="Search for events"
                placeholderTextColor={COLORS.gray400}
                icon={icons.SearchIcon}
                inputType={'text'}
            />
          </View>
          <Categories />
          <Upcoming/>
          <Suggestions/>
    </SafeAreaView>
  );
}

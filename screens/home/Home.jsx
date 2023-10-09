import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { ICONS, COLORS, } from '../../constants';
import InputField from '../../components/inputField/InputField';
import Upcoming from './Upcoming';
import Suggestions from './Suggestions';
import Categories from '../../components/categories/Categories';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeTabs() {
  return (

    <SafeAreaView style={{ backgroundColor: "#FDFDFD", flex: 1, padding: 24 }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 12 }} >
          <InputField
            placeholder="Search for events"
            placeholderTextColor={COLORS.gray400}
            icon={ICONS.SearchIcon}
            inputType={'text'}
          />
        </View>
        <Categories />
        <Upcoming />
        <Suggestions />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // gap:16,
    height: '100%'
  }
})
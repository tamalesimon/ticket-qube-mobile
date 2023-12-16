import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import InputField from '../../components/inputField/InputField';
import CategoryCard from '../../components/explorer/CategoryCard';

export default function Explore() {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1, padding: 24 }}>
      <View>
        <InputField
          placeholder="Search for events"
          placeholderTextColor={COLORS.gray400}
          icon={ICONS.SearchIcon}
          inputType={'text'}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.txtTitleContainer}>
          <Text style={styles.txtTitle}>Browse by category</Text>
        </View>
        <View style={styles.category}>
          <CategoryCard cardColor={"#5AC8E8"} title={"Religion & Spirituality"} second={"#53BEDD"} />
          <CategoryCard cardColor={"#C47DF9"} title={"Health & Wellness"} second={"#B973F5"} />
          <CategoryCard cardColor={"#F57DAB"} title={"Career & Business"} second={"#EE6FA1"} />
          <CategoryCard cardColor={"#FFB06D"} title={"Others"} second={"#FBA55A"} />
          <CategoryCard cardColor={"#8BE23D"} title={"Poetry & Comedy"} second={"#83D93A"} />
          <CategoryCard cardColor={"#2DD4BF"} title={"Movies & Film"} second={"#2ACBB7"} />
          <CategoryCard cardColor={"#887EF9"} title={"Education & Learning"} second={"#7D72F8"} />
          <CategoryCard cardColor={"#FF8142"} title={"Creativity & Fun"} second={"#F73"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  txtTitleContainer: {
    marginTop: 8,
    marginBottom: 16
  },
  txtTitle: {
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.grayBase,
  },
  category: {
    gap: 16
  }
})

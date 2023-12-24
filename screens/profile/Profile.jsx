import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { ICONS, COLORS, FONTS } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import TabButtons from './component/TabButtons';

const activities = [
  { id: 1, name: "Likes", total: 50 },
  { id: 2, name: "My Tickets", total: 15 },
  { id: 3, name: "Following", total: 30 },
];
export default function Profile() {
  const tabs = ["Events", "Collections", "About"];
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.gray50, flex: 1, }}>
      <View style={styles.profileDetails}>
        <Image style={styles.userImage} source={{ uri: 'https://img.freepik.com/premium-photo/beauty-face-smiling-black-woman-portrait-beautiful-candid-real-face-african-american-girl-high-quality-photo_21730-15880.jpg' }} />
        <View style={styles.userText}>
          <Text style={styles.nameTitle}>Namaganda Brenda</Text>
          <Text style={styles.emailTitle}>brendanamaganda@gmail.com</Text>
        </View>
      </View>
      <View style={styles.activityContainer}>
        {
          activities.map((activity) => (
            <View style={styles.activities} key={activity.id}>
              <Text style={styles.activityTotals}>{activity.total}</Text>
              <Text style={styles.activityName}>{activity.name}</Text>
            </View>
          ))
        }
      </View>
      <LinearGradient colors={[COLORS.white, COLORS.gray50]} style={{ marginTop: 32, borderTopStartRadius: 40, borderTopEndRadius: 40, paddingTop: 16, paddingHorizontal: 24 }}>
        <TabButtons tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileDetails: {
    // gap: 8
    marginBottom: 24
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 24,
    marginBottom: 16,
    borderColor: COLORS.white,
    borderWidth: 4
  },
  userText: {
    gap: 4,
    textAlign: 'center'
  },
  nameTitle: {
    fontSize: 18,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 700,
    lineHeight: 27,
    color: COLORS.grayBase
  },
  emailTitle: {
    fontSize: 12,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400
  },
  activityContainer: {
    borderWidth: 2,
    borderColor: COLORS.gray100,
    padding: 16,
    borderRadius: 16,
    // alignItems: 'flex-start'
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 24
  },
  activities: {
    flexDirection: 'column',
    gap: 4,
    textAlign: 'center',
  },
  activityTotals: {
    fontSize: 18,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 700,
    lineHeight: 27,
    color: COLORS.grayBase
  },
  activityName: {
    fontSize: 12,
    fontFamily: FONTS.NotoSansJPRegular,
    fontWeight: 400,
    lineHeight: 18,
    color: COLORS.gray400
  }
})
